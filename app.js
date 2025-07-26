// BloodBridge AI Application JavaScript

// Application state
let currentRole = null;
let currentTab = 'patients';

// DOM Elements
const landingPage = document.getElementById('landingPage');
const patientDashboard = document.getElementById('patientDashboard');
const donorDashboard = document.getElementById('donorDashboard');
const providerDashboard = document.getElementById('providerDashboard');
const chatbot = document.getElementById('chatbot');
const emergencyModal = document.getElementById('emergencyModal');

// Educational content data
const educationalContent = {
    "thalassemia": {
        title: "Understanding Thalassemia",
        content: "Thalassemia is an inherited blood disorder where the body makes abnormal hemoglobin. Regular blood transfusions are essential for major thalassemia patients."
    },
    "donation": {
        title: "Blood Donation Process",
        content: "The donation process takes about 30 minutes. You can donate every 3-4 months. Your contribution can save lives of children with thalassemia."
    },
    "bridge": {
        title: "Blood Bridge Concept",
        content: "Each thalassemia patient is connected to 6-10 dedicated donors who donate on rotation every 3-4 months, ensuring consistent blood supply."
    }
};

// AI Chatbot responses
const chatbotResponses = {
    "thalassemia": "Thalassemia is an inherited blood disorder where the body doesn't make enough healthy red blood cells. Major thalassemia patients need regular blood transfusions every 2-4 weeks to stay healthy.",
    "blood bridge": "Blood Bridge is our innovative system where each thalassemia patient is connected to 6-10 dedicated donors. These donors take turns donating every 3-4 months, ensuring a consistent blood supply for the patient.",
    "donation": "Blood donation is safe and takes about 30 minutes. You can donate whole blood every 3-4 months. One donation can help save up to 3 lives! Our AI system will match you with patients who need your blood type.",
    "emergency": "In case of emergency, use the Emergency Request button. Our AI will immediately notify the most suitable donors within a 50km radius and coordinate with nearby blood banks.",
    "side effects": "Common side effects of blood transfusion are rare but may include mild fever or allergic reactions. Our medical team monitors all patients closely during transfusions.",
    "diet": "Thalassemia patients should follow an iron-restricted diet as they already have iron overload from transfusions. Avoid iron supplements and iron-rich foods like red meat and spinach unless advised by your doctor.",
    "frequency": "Transfusion frequency depends on your hemoglobin levels. Most major thalassemia patients need transfusions every 2-4 weeks. Our AI tracks your patterns and predicts optimal timing.",
    "default": "I'm here to help with questions about Thalassemia, blood donation, and our platform. You can ask me about the Blood Bridge system, donation process, medical information, or emergency procedures."
};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    showLandingPage();
});

function initializeEventListeners() {
    // Role selection - Handle both card clicks and button clicks
    document.querySelectorAll('.role-card').forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const role = this.dataset.role;
            selectRole(role);
        });
    });

    // Role buttons inside cards
    document.querySelectorAll('.role-card .btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            const roleCard = this.closest('.role-card');
            const role = roleCard.dataset.role;
            selectRole(role);
        });
    });

    // Navigation buttons
    const backBtn1 = document.getElementById('backToLanding');
    const backBtn2 = document.getElementById('backToLanding2');
    const backBtn3 = document.getElementById('backToLanding3');
    
    if (backBtn1) backBtn1.addEventListener('click', showLandingPage);
    if (backBtn2) backBtn2.addEventListener('click', showLandingPage);
    if (backBtn3) backBtn3.addEventListener('click', showLandingPage);

    // Emergency request buttons
    const emergencyBtnHeader = document.getElementById('emergencyBtn');
    const emergencyRequestBtns = document.querySelectorAll('.emergency-request-btn');
    
    if (emergencyBtnHeader) {
        emergencyBtnHeader.addEventListener('click', function(e) {
            e.preventDefault();
            showEmergencyModal();
        });
    }
    
    emergencyRequestBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            showEmergencyModal();
        });
    });

    // Modal controls
    const closeEmergencyBtn = document.getElementById('closeEmergency');
    if (closeEmergencyBtn) {
        closeEmergencyBtn.addEventListener('click', function(e) {
            e.preventDefault();
            hideEmergencyModal();
        });
    }
    
    if (emergencyModal) {
        emergencyModal.addEventListener('click', function(e) {
            if (e.target === this) {
                hideEmergencyModal();
            }
        });
    }

    // Chatbot controls
    const chatbotBtn = document.getElementById('chatbotBtn');
    const closeChatbotBtn = document.getElementById('closeChatbot');
    const sendMessageBtn = document.getElementById('sendMessage');
    const chatInput = document.getElementById('chatInput');
    
    if (chatbotBtn) {
        chatbotBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showChatbot();
        });
    }
    
    if (closeChatbotBtn) {
        closeChatbotBtn.addEventListener('click', function(e) {
            e.preventDefault();
            hideChatbot();
        });
    }
    
    if (sendMessageBtn) {
        sendMessageBtn.addEventListener('click', function(e) {
            e.preventDefault();
            sendChatMessage();
        });
    }
    
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                sendChatMessage();
            }
        });
    }

    // Tab switching
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            switchTab(this.dataset.tab);
        });
    });

    // Availability toggle
    const availabilityToggle = document.getElementById('availabilityToggle');
    if (availabilityToggle) {
        availabilityToggle.addEventListener('change', function() {
            updateAvailabilityStatus(this.checked);
        });
    }

    // Request response buttons
    document.querySelectorAll('.request-item .btn--primary').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            respondToRequest(this);
        });
    });

    // Emergency form submission
    const emergencyFormBtn = document.querySelector('.emergency-form .btn--primary');
    if (emergencyFormBtn) {
        emergencyFormBtn.addEventListener('click', function(e) {
            e.preventDefault();
            submitEmergencyRequest();
        });
    }

    // Login button
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function(e) {
            e.preventDefault();
            showNotification('Login functionality will be available in production version.', 'info');
        });
    }

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            hideEmergencyModal();
            hideChatbot();
        }
    });
}

function selectRole(role) {
    console.log('Selecting role:', role);
    currentRole = role;
    hideAllSections();
    
    switch(role) {
        case 'patient':
            showSection(patientDashboard);
            break;
        case 'donor':
            showSection(donorDashboard);
            break;
        case 'provider':
            showSection(providerDashboard);
            break;
        default:
            showLandingPage();
    }
}

function showLandingPage() {
    console.log('Showing landing page');
    hideAllSections();
    showSection(landingPage);
    currentRole = null;
}

function hideAllSections() {
    const sections = [landingPage, patientDashboard, donorDashboard, providerDashboard];
    sections.forEach(section => {
        if (section) {
            section.classList.add('hidden');
        }
    });
}

function showSection(section) {
    if (section) {
        section.classList.remove('hidden');
        console.log('Showing section:', section.id);
    }
}

function showEmergencyModal() {
    console.log('Showing emergency modal');
    if (emergencyModal) {
        emergencyModal.classList.remove('hidden');
    }
}

function hideEmergencyModal() {
    console.log('Hiding emergency modal');
    if (emergencyModal) {
        emergencyModal.classList.add('hidden');
    }
}

function showChatbot() {
    console.log('Showing chatbot');
    if (chatbot) {
        chatbot.classList.remove('hidden');
    }
}

function hideChatbot() {
    console.log('Hiding chatbot');
    if (chatbot) {
        chatbot.classList.add('hidden');
    }
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    if (!input) return;
    
    const message = input.value.trim();
    
    if (!message) return;
    
    console.log('Sending chat message:', message);
    
    // Add user message
    addChatMessage(message, 'user');
    
    // Clear input
    input.value = '';
    
    // Generate AI response
    setTimeout(() => {
        const response = generateAIResponse(message);
        addChatMessage(response, 'bot');
    }, 1000);
}

function addChatMessage(message, sender) {
    const messagesContainer = document.getElementById('chatMessages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    messageDiv.innerHTML = `
        <div class="message-content">
            ${message}
        </div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateAIResponse(userMessage) {
    const message = userMessage.toLowerCase();
    
    // Simple keyword matching for AI responses
    if (message.includes('thalassemia') || message.includes('what is')) {
        return chatbotResponses.thalassemia;
    } else if (message.includes('blood bridge') || message.includes('bridge')) {
        return chatbotResponses['blood bridge'];
    } else if (message.includes('donation') || message.includes('donate')) {
        return chatbotResponses.donation;
    } else if (message.includes('emergency') || message.includes('urgent')) {
        return chatbotResponses.emergency;
    } else if (message.includes('side effect') || message.includes('reaction')) {
        return chatbotResponses['side effects'];
    } else if (message.includes('diet') || message.includes('food') || message.includes('iron')) {
        return chatbotResponses.diet;
    } else if (message.includes('frequency') || message.includes('how often')) {
        return chatbotResponses.frequency;
    } else {
        return chatbotResponses.default;
    }
}

function switchTab(tabName) {
    console.log('Switching to tab:', tabName);
    currentTab = tabName;
    
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeTabBtn = document.querySelector(`[data-tab="${tabName}"]`);
    if (activeTabBtn) {
        activeTabBtn.classList.add('active');
    }
    
    // Update tab content
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    const activeTabPanel = document.getElementById(`${tabName}-tab`);
    if (activeTabPanel) {
        activeTabPanel.classList.add('active');
    }
}

function updateAvailabilityStatus(isAvailable) {
    const statusText = isAvailable ? 'Available' : 'Not Available';
    const statusElement = document.querySelector('.donor-stats .stat-card:last-child .stat-number');
    
    if (statusElement) {
        statusElement.textContent = statusText;
    }
    
    // Show notification
    showNotification(`Availability status updated to: ${statusText}`, 'success');
}

function respondToRequest(button) {
    // Simulate responding to a blood request
    const requestItem = button.closest('.request-item');
    if (!requestItem) return;
    
    const patientInfo = requestItem.querySelector('h4');
    const patientName = patientInfo ? patientInfo.textContent.split(' - ')[0] : 'Patient';
    
    // Update button state
    button.textContent = 'Responded';
    button.disabled = true;
    button.classList.remove('btn--primary');
    button.classList.add('btn--outline');
    
    // Show notification
    showNotification(`You've responded to ${patientName}'s request. Hospital will contact you shortly.`, 'success');
}

function submitEmergencyRequest() {
    const bloodTypeSelect = document.getElementById('bloodType');
    const bloodType = bloodTypeSelect ? bloodTypeSelect.value : 'O+';
    
    console.log('Submitting emergency request for blood type:', bloodType);
    
    // Hide modal
    hideEmergencyModal();
    
    // Show success notification
    showNotification('Emergency request sent! 3 nearby donors have been notified.', 'success');
    
    // Simulate real-time updates
    setTimeout(() => {
        showNotification('First donor has responded and is on the way!', 'success');
    }, 5000);
}

function showNotification(message, type = 'success') {
    console.log('Showing notification:', message, type);
    const notification = document.getElementById('successNotification');
    
    if (notification) {
        const messageSpan = notification.querySelector('span');
        if (messageSpan) {
            messageSpan.textContent = message;
        }
        
        // Show notification
        notification.classList.add('show');
        
        // Hide after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 5000);
    }
}

// Simulate real-time updates
function simulateRealTimeUpdates() {
    // Update donor predictions every 30 seconds
    setInterval(() => {
        updateDonorPredictions();
    }, 30000);
    
    // Update blood bank inventory
    setInterval(() => {
        updateBloodBankInventory();
    }, 45000);
}

function updateDonorPredictions() {
    const predictions = document.querySelectorAll('.donor-info small');
    predictions.forEach(pred => {
        if (pred.textContent.includes('confidence')) {
            const currentConfidence = parseInt(pred.textContent.match(/\d+/)[0]);
            const newConfidence = Math.max(60, Math.min(95, currentConfidence + Math.floor(Math.random() * 10 - 5)));
            pred.textContent = pred.textContent.replace(/\d+%/, `${newConfidence}%`);
        }
    });
}

function updateBloodBankInventory() {
    // Simulate inventory changes
    console.log('Blood bank inventory updated');
}

// Advanced Features
function initializeAdvancedFeatures() {
    // Geolocation for emergency requests
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log('User location obtained for emergency matching');
        }, function(error) {
            console.log('Geolocation error:', error);
        });
    }
    
    // Service worker for offline support
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js').catch(function(error) {
            console.log('Service worker registration failed:', error);
        });
    }
    
    // Push notifications
    if ('Notification' in window && 'serviceWorker' in navigator) {
        Notification.requestPermission();
    }
}

// Accessibility features
function initializeAccessibility() {
    // High contrast mode detection
    const mediaQuery = window.matchMedia('(prefers-contrast: high)');
    if (mediaQuery.matches) {
        document.body.classList.add('high-contrast');
    }
}

// Performance monitoring
function initializePerformanceMonitoring() {
    // Monitor page load performance
    window.addEventListener('load', function() {
        const navigationTiming = performance.getEntriesByType('navigation')[0];
        console.log('Page load time:', navigationTiming.loadEventEnd - navigationTiming.loadEventStart, 'ms');
    });
}

// Security features
function initializeSecurity() {
    // Session timeout
    let sessionTimeout = setTimeout(() => {
        showNotification('Session expired for security. Please sign in again.', 'warning');
        showLandingPage();
    }, 30 * 60 * 1000); // 30 minutes
    
    // Reset timeout on user activity
    document.addEventListener('click', () => {
        clearTimeout(sessionTimeout);
        sessionTimeout = setTimeout(() => {
            showLandingPage();
        }, 30 * 60 * 1000);
    });
}

// Multi-language support simulation
const languages = {
    'en': {
        'title': 'BloodBridge AI - Thalassemia Support Platform',
        'emergency': 'Emergency',
        'signin': 'Sign In'
    },
    'hi': {
        'title': 'ब्लडब्रिज AI - थैलेसीमिया सहायता मंच',
        'emergency': 'आपातकाल',
        'signin': 'साइन इन'
    }
};

// Analytics tracking
function trackUserAction(action, data = {}) {
    console.log('User Action:', action, data);
    // In production, this would send data to analytics service
}

// Initialize all features
document.addEventListener('DOMContentLoaded', function() {
    simulateRealTimeUpdates();
    initializeAdvancedFeatures();
    initializeAccessibility();
    initializePerformanceMonitoring();
    initializeSecurity();
    
    // Track page load
    trackUserAction('page_load', { timestamp: new Date().toISOString() });
});

// Export functions for testing
window.BloodBridgeApp = {
    selectRole,
    showEmergencyModal,
    sendChatMessage,
    generateAIResponse,
    showNotification
};