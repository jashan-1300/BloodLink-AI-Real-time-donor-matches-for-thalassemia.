import plotly.graph_objects as go
import json

# Data for the flowchart
data = [
  {"component": "Data Sources", "items": ["Donor Registration", "Patient Records", "Blood Inventory", "Historical Data", "Location Data", "Emergency Requests"]},
  {"component": "AI/ML Engines", "items": ["Eligibility Prediction", "Demand Forecasting", "Matching Algorithm", "Predictive Analytics", "NLP Chatbot", "Inventory Optimization"]},
  {"component": "Outputs", "items": ["Smart Recommendations", "Emergency Alerts", "Shortage Warnings", "Donation Schedules", "Chatbot Responses", "Analytics Insights"]}
]

# Abbreviate text to meet 15 character limit
abbreviated_data = [
  {"component": "Data Sources", "items": ["Donor Reg", "Patient Rec", "Blood Inv", "Historical", "Location", "Emergency Req"]},
  {"component": "AI/ML Engines", "items": ["Eligibility Pred", "Demand Forecast", "Matching Algo", "Predictive ML", "NLP Chatbot", "Inventory Opt"]},
  {"component": "Outputs", "items": ["Smart Recomm", "Emergency Alert", "Shortage Warn", "Donation Sched", "Chatbot Resp", "Analytics"]}
]

# Create nodes and links for Sankey diagram
all_nodes = []
node_colors = []
links_source = []
links_target = []
links_value = []

# Colors from the brand palette
colors = ['#1FB8CD', '#DB4545', '#2E8B57', '#5D878F', '#D2BA4C', '#B4413C']

# Add all nodes
node_index = 0
for section_idx, section in enumerate(abbreviated_data):
    section_color = colors[section_idx % len(colors)]
    for item in section["items"]:
        all_nodes.append(item)
        node_colors.append(section_color)
        node_index += 1

# Create links - each data source connects to each AI/ML engine, each AI/ML engine connects to each output
data_sources_count = len(abbreviated_data[0]["items"])
ai_engines_count = len(abbreviated_data[1]["items"])
outputs_count = len(abbreviated_data[2]["items"])

# Data sources to AI/ML engines
for i in range(data_sources_count):
    for j in range(ai_engines_count):
        links_source.append(i)
        links_target.append(data_sources_count + j)
        links_value.append(1)

# AI/ML engines to outputs
for i in range(ai_engines_count):
    for j in range(outputs_count):
        links_source.append(data_sources_count + i)
        links_target.append(data_sources_count + ai_engines_count + j)
        links_value.append(1)

# Create Sankey diagram
fig = go.Figure(data=[go.Sankey(
    node = dict(
        pad = 15,
        thickness = 20,
        line = dict(color = "black", width = 0.5),
        label = all_nodes,
        color = node_colors
    ),
    link = dict(
        source = links_source,
        target = links_target,
        value = links_value,
        color = 'rgba(31, 184, 205, 0.3)'  # Semi-transparent cyan
    )
)])

fig.update_layout(
    title="AI/ML Platform Architecture Flow",
    font_size=12
)

fig.write_image("thalassemia_ai_architecture.png")