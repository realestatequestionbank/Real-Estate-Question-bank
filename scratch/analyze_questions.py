import csv

# Read existing questions
class_a_path = "/Users/radhikabiyani/Projects/DMV_Question_Bank/web/public/data/california_cdl_class_a_questions.csv"
common_path = "/Users/radhikabiyani/Projects/DMV_Question_Bank/web/cdl_common_questions.csv"

with open(class_a_path, mode="r", encoding="utf-8") as f:
    class_a_qs = list(csv.DictReader(f))

with open(common_path, mode="r", encoding="utf-8") as f:
    common_qs = list(csv.DictReader(f))

all_existing = class_a_qs + common_qs
all_texts = set(q['question'].lower().strip() for q in all_existing)

print(f"Total existing General Knowledge questions: {len(all_existing)}")
print(f"Unique: {len(all_texts)}")

# Categorize by topic using keywords
topic_counts = {}
topics = {
    "Transporting Cargo Safely": ["cargo", "load", "weight", "tie-down", "secur", "baffle", "surge", "oversize"],
    "Driving Safely / Hazard Perception": ["hazard", "speed", "space", "follow", "tailgat", "distract", "cell phone", "texting", "road rage", "aggressive"],
    "Seeing Ahead / Communicating / Night Driving": ["see", "look ahead", "mirror", "signal", "horn", "night", "dark", "headlight", "blind spot", "fog light"],
    "Controlling Speed": ["brake", "speed", "stop", "reaction", "perception", "brake lag", "stopping distance", "skid"],
    "Managing Space": ["space", "following distance", "clearance", "underpass", "overhead"],
    "Extreme Driving Conditions (Weather, Night, Mountain)": ["winter", "ice", "icy", "snow", "rain", "wet", "fog", "mountain", "downgrade", "grade", "uphill", "downhill", "hot weather", "tar"],
    "Driving in Emergencies": ["emergency", "fail", "swerve", "tire blowout", "tire fail", "brake fail", "skid", "fire", "extinguisher", "stuck"],
    "Shifting / Clutch / Transmission": ["clutch", "gear", "shift", "transmission", "downshift", "upshift", "rpm", "torque"],
    "Backing / Turning / Parking": ["back", "reverse", "turn", "park", "parallel", "off-track", "right turn", "left turn", "intersection"],
    "Coupling / Uncoupling Trailers": ["coupl", "uncoupl", "fifth wheel", "pintle", "landing gear", "kingpin", "locking jaw"],
    "Pre-Trip Inspection": ["inspect", "pre-trip", "pre trip", "walk-around", "walk around", "checklist", "pre-drive"],
    "Engine Compartment": ["oil", "coolant", "belt", "hose", "radiator", "battery", "fluid", "engine compartment"],
    "Tires": ["tire", "tread", "rim", "wheel", "retread", "regroove", "inflation", "pressure"],
    "Lights / Electrical": ["light", "lamp", "fuse", "electrical", "reflector", "headlight", "tail light", "turn signal light"],
    "Steering": ["steer", "power steering", "steering wheel", "front axle"],
    "Suspension / Frame": ["suspension", "frame", "spring", "axle", "shock absorber"],
    "Brakes (General)": ["brake", "drum", "disc", "brake pad", "brake shoe", "hydraulic"],
    "Air Brakes": ["air brake", "air compressor", "air tank", "psi", "spring brake", "abs", "anti-lock", "drain", "brake lag"],
    "CDL Requirements / Disqualifications": ["cdl", "license", "disqualif", "suspend", "revoke", "points", "record", "notify", "employer", "age requirement", "18", "21"],
    "Hours of Service / Log Books": ["hours of service", "log", "duty", "rest", "break", "fatigue", "sleepy"],
    "Alcohol / Drugs": ["alcohol", "drug", "bac", "blood alcohol", "implied consent", "impair", "refusal"],
    "Accidents / Reporting": ["accident", "scene", "report", "notify", "injur", "emergency contact"],
    "Hazardous Materials Basics": ["placards", "hazmat", "hazardous material", "dangerous goods"],
    "Railroad Crossings": ["railroad", "rail", "track", "crossing", "train"],
    "Work Zones": ["work zone", "construction zone", "orange cone", "flagman"],
}

for topic, keywords in topics.items():
    count = 0
    for q in all_existing:
        text = (q['question'] + " " + q.get('explanation', '')).lower()
        if any(kw in text for kw in keywords):
            count += 1
    topic_counts[topic] = count

print("\n=== TOPIC COVERAGE ANALYSIS ===")
for topic, count in sorted(topic_counts.items(), key=lambda x: x[1]):
    print(f"  [{count:3d}] {topic}")

print("\n=== POSSIBLE GAPS (topics with < 10 questions) ===")
for topic, count in sorted(topic_counts.items(), key=lambda x: x[1]):
    if count < 10:
        print(f"  [{count:3d}] {topic}")
