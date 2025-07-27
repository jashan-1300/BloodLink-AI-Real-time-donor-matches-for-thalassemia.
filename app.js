// ThalCare Platform JavaScript

// Application Data
const appData = {
  "donors": [
    {"id": 1, "name": "Rajesh Kumar", "bloodType": "O+", "location": "Mumbai", "lastDonation": "2024-10-15", "totalDonations": 12, "status": "Available", "phone": "+91-9876543210", "eligibilityScore": 0.95},
    {"id": 2, "name": "Priya Sharma", "bloodType": "A+", "location": "Delhi", "lastDonation": "2024-09-20", "totalDonations": 8, "status": "Available", "phone": "+91-8765432109", "eligibilityScore": 0.88},
    {"id": 3, "name": "Mohammed Ali", "bloodType": "B+", "location": "Bangalore", "lastDonation": "2024-11-01", "totalDonations": 15, "status": "Recently Donated", "phone": "+91-7654321098", "eligibilityScore": 0.92},
    {"id": 4, "name": "Sunita Devi", "bloodType": "AB+", "location": "Chennai", "lastDonation": "2024-08-30", "totalDonations": 6, "status": "Available", "phone": "+91-6543210987", "eligibilityScore": 0.85},
    {"id": 5, "name": "Arjun Patel", "bloodType": "O-", "location": "Ahmedabad", "lastDonation": "2024-10-05", "totalDonations": 20, "status": "Available", "phone": "+91-5432109876", "eligibilityScore": 0.98},
    {"id": 6, "name": "Kavitha Menon", "bloodType": "A-", "location": "Kochi", "lastDonation": "2024-09-15", "totalDonations": 9, "status": "Available", "phone": "+91-9876543211", "eligibilityScore": 0.91},
    {"id": 7, "name": "Vikram Singh", "bloodType": "B-", "location": "Jaipur", "lastDonation": "2024-08-20", "totalDonations": 7, "status": "Available", "phone": "+91-8765432108", "eligibilityScore": 0.87},
    {"id": 8, "name": "Deepika Rao", "bloodType": "AB-", "location": "Pune", "lastDonation": "2024-10-01", "totalDonations": 5, "status": "Available", "phone": "+91-7654321097", "eligibilityScore": 0.83}
  ],
  "patients": [
    {"id": 1, "name": "Aarav Gupta", "age": 12, "bloodType": "A+", "location": "Mumbai", "transfusionFrequency": "Every 21 days", "nextDue": "2024-12-15", "bridgeId": 1, "severity": "Major", "hemoglobinLevel": 6.5},
    {"id": 2, "name": "Kavya Reddy", "age": 8, "bloodType": "B+", "location": "Hyderabad", "transfusionFrequency": "Every 28 days", "nextDue": "2024-12-20", "bridgeId": 2, "severity": "Major", "hemoglobinLevel": 7.2},
    {"id": 3, "name": "Rohan Singh", "age": 15, "bloodType": "O+", "location": "Delhi", "transfusionFrequency": "Every 25 days", "nextDue": "2024-12-18", "bridgeId": 3, "severity": "Major", "hemoglobinLevel": 6.8},
    {"id": 4, "name": "Ananya Iyer", "age": 10, "bloodType": "AB+", "location": "Chennai", "transfusionFrequency": "Every 30 days", "nextDue": "2024-12-25", "bridgeId": 4, "severity": "Intermedia", "hemoglobinLevel": 8.1}
  ],
  "bloodBridges": [
    {"id": 1, "patientName": "Aarav Gupta", "donorCount": 8, "status": "Active", "nextDonation": "2024-12-15", "location": "Mumbai", "coordinator": "Dr. Mehta", "successRate": 95},
    {"id": 2, "patientName": "Kavya Reddy", "donorCount": 6, "status": "Needs Donors", "nextDonation": "2024-12-20", "location": "Hyderabad", "coordinator": "Dr. Prasad", "successRate": 88},
    {"id": 3, "patientName": "Rohan Singh", "donorCount": 10, "status": "Fully Supported", "nextDonation": "2024-12-18", "location": "Delhi", "coordinator": "Dr. Singh", "successRate": 98},
    {"id": 4, "patientName": "Ananya Iyer", "donorCount": 7, "status": "Active", "nextDonation": "2024-12-25", "location": "Chennai", "coordinator": "Dr. Raman", "successRate": 92}
  ],
  "bloodInventory": [
    {"type": "A+", "units": 45, "expiringSoon": 5, "status": "Adequate", "demandTrend": "Stable"},
    {"type": "A-", "units": 12, "expiringSoon": 2, "status": "Low", "demandTrend": "Increasing"},
    {"type": "B+", "units": 38, "expiringSoon": 3, "status": "Adequate", "demandTrend": "Stable"},
    {"type": "B-", "units": 8, "expiringSoon": 1, "status": "Critical", "demandTrend": "High"},
    {"type": "AB+", "units": 15, "expiringSoon": 2, "status": "Low", "demandTrend": "Stable"},
    {"type": "AB-", "units": 4, "expiringSoon": 1, "status": "Critical", "demandTrend": "Increasing"},
    {"type": "O+", "units": 52, "expiringSoon": 4, "status": "Good", "demandTrend": "Stable"},
    {"type": "O-", "units": 18, "expiringSoon": 3, "status": "Adequate", "demandTrend": "High"}
  ],
  "emergencyRequests": [
    {"id": 1, "patientName": "Critical Patient 1", "bloodType": "O-", "location": "Mumbai", "urgency": "Critical", "hospital": "Tata Memorial Hospital", "timeRemaining": "2 hours", "unitsNeeded": 4},
    {"id": 2, "patientName": "Emergency Case 2", "bloodType": "B-", "location": "Delhi", "urgency": "High", "hospital": "AIIMS Delhi", "timeRemaining": "6 hours", "unitsNeeded": 2},
    {"id": 3, "patientName": "Urgent Patient 3", "bloodType": "A+", "location": "Bangalore", "urgency": "Moderate", "hospital": "Narayana Hospital", "timeRemaining": "12 hours", "unitsNeeded": 3}
  ],
  "statistics": {
    "totalDonors": 2847,
    "activeBridges": 89,
    "patientsServed": 1205,
    "livesSaved": 3421,
    "bloodUnitsCollected": 15678,
    "emergenciesResolved": 892
  },
  "aiPredictions": {
    "donorAvailability": {"today": 0.85, "tomorrow": 0.78, "nextWeek": 0.82},
    "bloodDemand": {"A+": "Stable", "B-": "Increasing", "O-": "Critical", "AB+": "Decreasing"},
    "optimalDonationTimes": ["10:00 AM", "2:00 PM", "4:00 PM"]
  },
  "testimonials": [
    {"name": "Mrs. Kavitha", "message": "The Blood Bridge connected to my son saved his life. The platform made everything so easy.", "location": "Chennai"},
    {"name": "Donor Raj", "message": "I love how the AI matches me with patients nearby. It feels more personal and meaningful.", "location": "Mumbai"},
    {"name": "Dr. Prasad", "message": "This platform has revolutionized how we manage Thalassemia care in our hospital.", "location": "Hyderabad"}
  ]
};

// Global variables
let currentSection = 'dashboard';
let charts = {};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupNavigation();
  loadDashboard();
  setupEventListeners();
  animateCounters();
  setupChatbot();
  setInterval(updateRealTimeData, 30000); // Update every 30 seconds
}

// Navigation System
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const section = this.getAttribute('data-section');
      showSection(section);
    });
  });
}

function showSection(sectionName) {
  // Hide all sections
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Show target section
  const targetSection = document.getElementById(`${sectionName}-section`);
  if (targetSection) {
    targetSection.classList.add('active');
  }
  
  // Update navigation
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');
  
  currentSection = sectionName;
  
  // Load section-specific content
  switch(sectionName) {
    case 'dashboard':
      loadDashboard();
      break;
    case 'donors':
      loadDonors();
      break;
    case 'bridges':
      loadBridges();
      break;
    case 'inventory':
      loadInventory();
      break;
    case 'analytics':
      loadAnalytics();
      break;
    case 'emergency':
      loadEmergency();
      break;
  }
}

// Dashboard Functions
function loadDashboard() {
  loadEmergencyRequests();
  loadInventorySummary();
  loadTestimonials();
  loadBridgeNetwork();
}

function loadEmergencyRequests() {
  const container = document.getElementById('emergency-requests');
  if (!container) return;
  
  container.innerHTML = appData.emergencyRequests.map(request => `
    <div class="emergency-request">
      <div class="emergency-details">
        <h4>${request.patientName}</h4>
        <p><i class="fas fa-hospital"></i> ${request.hospital}, ${request.location}</p>
        <p><i class="fas fa-exclamation-triangle"></i> ${request.urgency} - ${request.unitsNeeded} units needed</p>
      </div>
      <div class="emergency-meta">
        <div class="blood-type-badge">${request.bloodType}</div>
        <div class="time-remaining">${request.timeRemaining}</div>
        <button class="btn btn--sm btn--primary" onclick="respondToEmergency(${request.id})">
          <i class="fas fa-ambulance"></i> Respond
        </button>
      </div>
    </div>
  `).join('');
}

function loadInventorySummary() {
  const container = document.getElementById('inventory-summary');
  if (!container) return;
  
  container.innerHTML = appData.bloodInventory.map(item => `
    <div class="inventory-item">
      <div class="inventory-type">${item.type}</div>
      <div class="inventory-count ${item.status.toLowerCase()}">${item.units}</div>
      <div class="inventory-status ${item.status.toLowerCase()}">${item.status}</div>
    </div>
  `).join('');
}

function loadTestimonials() {
  const container = document.getElementById('testimonial-carousel');
  if (!container) return;
  
  let currentTestimonial = 0;
  
  function showTestimonial(index) {
    const testimonial = appData.testimonials[index];
    container.innerHTML = `
      <div class="testimonial-item">
        <div class="testimonial-message">"${testimonial.message}"</div>
        <div class="testimonial-author">${testimonial.name}</div>
        <div class="testimonial-location">${testimonial.location}</div>
      </div>
    `;
  }
  
  showTestimonial(currentTestimonial);
  
  // Auto-rotate testimonials
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % appData.testimonials.length;
    showTestimonial(currentTestimonial);
  }, 5000);
}

function loadBridgeNetwork() {
  const container = document.getElementById('bridge-network-map');
  if (!container) return;
  
  container.innerHTML = appData.bloodBridges.map(bridge => `
    <div class="bridge-item">
      <div class="bridge-header">
        <div class="bridge-patient">${bridge.patientName}</div>
        <div class="bridge-status ${bridge.status.toLowerCase().replace(/\s+/g, '-')}">${bridge.status}</div>
      </div>
      <div class="bridge-info">
        <div class="bridge-metric">
          <div class="bridge-metric-value">${bridge.donorCount}</div>
          <div class="bridge-metric-label">Donors</div>
        </div>
        <div class="bridge-metric">
          <div class="bridge-metric-value">${bridge.successRate}%</div>
          <div class="bridge-metric-label">Success Rate</div>
        </div>
      </div>
      <div class="bridge-next">Next donation: ${bridge.nextDonation}</div>
    </div>
  `).join('');
}

// Donors Functions
function loadDonors() {
  displayDonors(appData.donors);
  updateDonorCount(appData.donors.length);
}

function displayDonors(donors) {
  const container = document.getElementById('donor-list');
  if (!container) return;
  
  container.innerHTML = donors.map(donor => `
    <div class="donor-item">
      <div class="donor-info">
        <h4>${donor.name}</h4>
        <div class="donor-details">
          <span class="donor-detail"><i class="fas fa-tint"></i> ${donor.bloodType}</span>
          <span class="donor-detail"><i class="fas fa-map-marker-alt"></i> ${donor.location}</span>
          <span class="donor-detail"><i class="fas fa-calendar"></i> Last: ${donor.lastDonation}</span>
          <span class="donor-detail"><i class="fas fa-heart"></i> ${donor.totalDonations} donations</span>
        </div>
        <div class="eligibility-score">
          <span>AI Score:</span>
          <div class="score-bar">
            <div class="score-fill" style="width: ${donor.eligibilityScore * 100}%"></div>
          </div>
          <span>${Math.round(donor.eligibilityScore * 100)}%</span>
        </div>
      </div>
      <div class="donor-actions">
        <button class="btn btn--sm btn--primary" onclick="contactDonor(${donor.id})">
          <i class="fas fa-phone"></i> Contact
        </button>
        <button class="btn btn--sm btn--outline" onclick="viewDonorProfile(${donor.id})">
          <i class="fas fa-user"></i> Profile
        </button>
      </div>
    </div>
  `).join('');
}

function searchDonors() {
  const bloodType = document.getElementById('blood-type-search').value;
  const location = document.getElementById('location-search').value.toLowerCase();
  
  let filteredDonors = appData.donors.filter(donor => {
    const matchesBloodType = !bloodType || donor.bloodType === bloodType;
    const matchesLocation = !location || donor.location.toLowerCase().includes(location);
    const isAvailable = donor.status === 'Available';
    return matchesBloodType && matchesLocation && isAvailable;
  });
  
  // AI-powered sorting by eligibility score and proximity
  filteredDonors.sort((a, b) => b.eligibilityScore - a.eligibilityScore);
  
  displayDonors(filteredDonors);
  updateDonorCount(filteredDonors.length);
  
  // Show AI insights
  showAIInsights(filteredDonors, bloodType);
}

function updateDonorCount(count) {
  const countElement = document.getElementById('donor-count');
  if (countElement) {
    countElement.textContent = `${count} Found`;
    countElement.className = `status ${count > 0 ? 'status--success' : 'status--warning'}`;
  }
}

// Bridges Functions
function loadBridges() {
  const container = document.getElementById('bridges-grid');
  if (!container) return;
  
  container.innerHTML = appData.bloodBridges.map(bridge => `
    <div class="card">
      <div class="card__header">
        <h3><i class="fas fa-user-injured"></i> ${bridge.patientName}</h3>
        <span class="status ${getStatusClass(bridge.status)}">${bridge.status}</span>
      </div>
      <div class="card__body">
        <div class="bridge-info">
          <div class="bridge-metric">
            <div class="bridge-metric-value">${bridge.donorCount}</div>
            <div class="bridge-metric-label">Connected Donors</div>
          </div>
          <div class="bridge-metric">
            <div class="bridge-metric-value">${bridge.successRate}%</div>
            <div class="bridge-metric-label">Success Rate</div>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Location</label>
          <p>${bridge.location}</p>
        </div>
        <div class="form-group">
          <label class="form-label">Coordinator</label>
          <p>${bridge.coordinator}</p>
        </div>
        <div class="form-group">
          <label class="form-label">Next Donation</label>
          <p>${bridge.nextDonation}</p>
        </div>
        <div class="flex gap-8">
          <button class="btn btn--primary flex-1" onclick="manageBridge(${bridge.id})">
            <i class="fas fa-cogs"></i> Manage
          </button>
          <button class="btn btn--outline flex-1" onclick="viewBridgeDetails(${bridge.id})">
            <i class="fas fa-eye"></i> Details
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

// Inventory Functions
function loadInventory() {
  createInventoryChart();
  loadDetailedInventory();
}

function createInventoryChart() {
  const ctx = document.getElementById('inventory-chart');
  if (!ctx) return;
  
  if (charts.inventory) {
    charts.inventory.destroy();
  }
  
  charts.inventory = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: appData.bloodInventory.map(item => item.type),
      datasets: [{
        label: 'Available Units',
        data: appData.bloodInventory.map(item => item.units),
        backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325'],
        borderColor: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Blood Inventory Levels'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Units Available'
          }
        }
      }
    }
  });
}

function loadDetailedInventory() {
  const container = document.getElementById('detailed-inventory');
  if (!container) return;
  
  container.innerHTML = `
    <div class="inventory-row">
      <div>Blood Type</div>
      <div>Units</div>
      <div>Expiring Soon</div>
      <div>Status</div>
      <div>Demand Trend</div>
    </div>
    ${appData.bloodInventory.map(item => `
      <div class="inventory-row">
        <div><strong>${item.type}</strong></div>
        <div>${item.units}</div>
        <div>${item.expiringSoon}</div>
        <div><span class="status status--${getStatusClass(item.status)}">${item.status}</span></div>
        <div>${item.demandTrend}</div>
      </div>
    `).join('')}
  `;
}

// Analytics Functions
function loadAnalytics() {
  createTrendsChart();
  createPredictionsChart();
}

function createTrendsChart() {
  const ctx = document.getElementById('trends-chart');
  if (!ctx) return;
  
  if (charts.trends) {
    charts.trends.destroy();
  }
  
  const trendData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Blood Donations',
      data: [120, 135, 150, 142, 168, 185, 172, 190, 195, 210, 188, 205],
      borderColor: '#1FB8CD',
      backgroundColor: 'rgba(31, 184, 205, 0.1)',
      fill: true,
      tension: 0.4
    }, {
      label: 'Transfusions',
      data: [95, 108, 125, 118, 145, 162, 158, 175, 180, 192, 175, 188],
      borderColor: '#B4413C',
      backgroundColor: 'rgba(180, 65, 60, 0.1)',
      fill: true,
      tension: 0.4
    }]
  };
  
  charts.trends = new Chart(ctx, {
    type: 'line',
    data: trendData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'Monthly Donation & Transfusion Trends'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}

function createPredictionsChart() {
  const ctx = document.getElementById('predictions-chart');
  if (!ctx) return;
  
  if (charts.predictions) {
    charts.predictions.destroy();
  }
  
  charts.predictions = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['High Demand', 'Stable', 'Low Demand', 'Critical'],
      datasets: [{
        data: [25, 45, 20, 10],
        backgroundColor: ['#DB4545', '#1FB8CD', '#5D878F', '#B4413C'],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: 'AI Demand Predictions'
        },
        legend: {
          position: 'bottom'
        }
      }
    }
  });
}

// Emergency Functions
function loadEmergency() {
  const container = document.getElementById('emergency-list');
  if (!container) return;
  
  container.innerHTML = appData.emergencyRequests.map(request => `
    <div class="emergency-request">
      <div class="emergency-details">
        <h4>${request.patientName}</h4>
        <p><i class="fas fa-hospital"></i> ${request.hospital}, ${request.location}</p>
        <p><i class="fas fa-exclamation-triangle"></i> ${request.urgency} - ${request.unitsNeeded} units needed</p>
        <p><i class="fas fa-clock"></i> Time remaining: ${request.timeRemaining}</p>
      </div>
      <div class="emergency-meta">
        <div class="blood-type-badge">${request.bloodType}</div>
        <button class="btn btn--sm btn--primary" onclick="respondToEmergency(${request.id})">
          <i class="fas fa-ambulance"></i> Respond Now
        </button>
      </div>
    </div>
  `).join('');
}

// Event Handlers
function setupEventListeners() {
  // Blood request form
  const requestForm = document.getElementById('blood-request-form');
  if (requestForm) {
    requestForm.addEventListener('submit', handleBloodRequest);
  }
  
  // Registration forms
  const donorForm = document.getElementById('donor-form');
  const patientForm = document.getElementById('patient-form');
  
  if (donorForm) {
    donorForm.addEventListener('submit', handleDonorRegistration);
  }
  
  if (patientForm) {
    patientForm.addEventListener('submit', handlePatientRegistration);
  }
}

function handleBloodRequest(e) {
  e.preventDefault();
  
  // Simulate AI processing
  showNotification('AI is processing your request and matching with donors...', 'info');
  
  setTimeout(() => {
    showNotification('Request submitted successfully! 3 donors have been notified.', 'success');
    e.target.reset();
  }, 2000);
}

function handleDonorRegistration(e) {
  e.preventDefault();
  showNotification('Donor registration successful! AI eligibility screening completed.', 'success');
  hideModal('registerModal');
  e.target.reset();
}

function handlePatientRegistration(e) {
  e.preventDefault();
  showNotification('Patient registration successful! Creating Blood Bridge network...', 'success');
  hideModal('registerModal');
  e.target.reset();
}

// Modal Functions
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('hidden');
    modal.style.display = 'flex';
  }
}

function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
    modal.style.display = 'none';
  }
}

function switchTab(tabName) {
  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  // Update forms
  document.querySelectorAll('.registration-form').forEach(form => form.classList.remove('active'));
  document.getElementById(`${tabName}-form`).classList.add('active');
}

// Chatbot Functions
function setupChatbot() {
  const chatbotInput = document.getElementById('chatbot-input');
  if (chatbotInput) {
    chatbotInput.addEventListener('keypress', handleChatInput);
  }
}

function toggleChatbot() {
  const chatbotWindow = document.querySelector('.chatbot-window');
  if (chatbotWindow) {
    chatbotWindow.classList.toggle('hidden');
  }
}

function handleChatInput(event) {
  if (event.key === 'Enter') {
    sendChatMessage();
  }
}

function sendChatMessage() {
  const input = document.getElementById('chatbot-input');
  const message = input.value.trim();
  
  if (!message) return;
  
  addChatMessage(message, 'user');
  input.value = '';
  
  // Simulate AI response
  setTimeout(() => {
    const response = generateAIResponse(message);
    addChatMessage(response, 'bot');
  }, 1000);
}

function addChatMessage(message, sender) {
  const messagesContainer = document.getElementById('chatbot-messages');
  if (!messagesContainer) return;
  
  const messageElement = document.createElement('div');
  messageElement.className = `message ${sender}-message`;
  messageElement.innerHTML = `<div class="message-content">${message}</div>`;
  
  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function generateAIResponse(userMessage) {
  const message = userMessage.toLowerCase();
  
  if (message.includes('donor') || message.includes('donate')) {
    return 'I can help you find nearby donors! Use our AI-powered matching system to connect with compatible donors in your area. Would you like me to guide you through the process?';
  } else if (message.includes('emergency') || message.includes('urgent')) {
    return 'For emergency blood requests, click the Emergency section or use our one-click SOS feature. I can immediately notify nearby donors and coordinate with hospitals. Is this a critical situation?';
  } else if (message.includes('appointment') || message.includes('schedule')) {
    return 'I can help you schedule donation appointments! Our system uses AI to suggest optimal times based on donor availability and your location. What date works best for you?';
  } else if (message.includes('thalassemia') || message.includes('patient')) {
    return 'Thalassemia is a genetic blood disorder requiring regular transfusions. Our Blood Bridge network ensures consistent donor support. Would you like information about patient registration or treatment support?';
  } else if (message.includes('bridge') || message.includes('network')) {
    return 'Blood Bridges connect Thalassemia patients with dedicated donor networks. Each bridge has 6-10 committed donors ensuring consistent blood supply. Would you like to create or join a Blood Bridge?';
  } else {
    return 'I\'m here to help with blood donation, emergency requests, appointment scheduling, and Thalassemia support. You can also ask me about navigating the platform or connecting with our medical team. How can I assist you today?';
  }
}

// Utility Functions
function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-count'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      counter.textContent = Math.floor(current).toLocaleString();
    }, 16);
  });
}

function getStatusClass(status) {
  switch(status.toLowerCase()) {
    case 'active': return 'success';
    case 'available': return 'success';
    case 'good': return 'success';
    case 'adequate': return 'info';
    case 'needs donors': return 'warning';
    case 'low': return 'warning';
    case 'critical': return 'error';
    case 'fully supported': return 'info';
    default: return 'info';
  }
}

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-left: 4px solid var(--color-${type === 'success' ? 'success' : type === 'error' ? 'error' : 'info'});
    border-radius: var(--radius-lg);
    padding: var(--space-16);
    box-shadow: var(--shadow-lg);
    z-index: 1001;
    max-width: 400px;
    animation: slideIn 0.3s ease-out;
  `;
  
  notification.innerHTML = `
    <div style="display: flex; align-items: center; gap: var(--space-8);">
      <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
      <span>${message}</span>
      <button onclick="this.parentElement.parentElement.remove()" style="margin-left: auto; background: none; border: none; cursor: pointer;">&times;</button>
    </div>
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    if (notification.parentElement) {
      notification.remove();
    }
  }, 5000);
}

function updateRealTimeData() {
  // Simulate real-time updates
  if (currentSection === 'dashboard') {
    // Update emergency requests randomly
    const timeElements = document.querySelectorAll('.time-remaining');
    timeElements.forEach(element => {
      const currentTime = element.textContent;
      // Simulate time countdown
      if (currentTime.includes('hours')) {
        const hours = parseInt(currentTime);
        if (hours > 1) {
          element.textContent = `${hours - 1} hours`;
        }
      }
    });
  }
}

// Action Functions
function contactDonor(donorId) {
  const donor = appData.donors.find(d => d.id === donorId);
  if (donor) {
    showNotification(`Contacting ${donor.name} at ${donor.phone}`, 'info');
  }
}

function viewDonorProfile(donorId) {
  showNotification('Opening donor profile...', 'info');
}

function respondToEmergency(requestId) {
  showNotification('Activating emergency response protocol. Notifying nearby donors...', 'success');
}

function manageBridge(bridgeId) {
  showNotification('Opening Bridge management panel...', 'info');
}

function viewBridgeDetails(bridgeId) {
  showNotification('Loading detailed Bridge information...', 'info');
}

function activateEmergencyResponse() {
  showNotification('Emergency broadcast activated! All nearby donors have been notified.', 'success');
}

function mobilizeDonors() {
  showNotification('Mobilizing emergency donor network. Expected response time: 15 minutes.', 'info');
}

function contactHospitals() {
  showNotification('Contacting partner hospitals for immediate blood availability...', 'info');
}

function showAIInsights(donors, bloodType) {
  if (donors.length > 0) {
    const avgScore = donors.reduce((sum, donor) => sum + donor.eligibilityScore, 0) / donors.length;
    showNotification(`AI Analysis: Found ${donors.length} compatible donors with ${Math.round(avgScore * 100)}% average compatibility score.`, 'success');
  } else {
    showNotification('AI Recommendation: No immediate matches found. Expanding search radius and checking recent donor database...', 'warning');
  }
}

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);