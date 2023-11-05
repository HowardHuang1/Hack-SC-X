house_features = {
    "STAR rated devices",
    "heat pumps",
    "solar panels",
    "wind turbines",
    "low-flow water fixtures",
    "rainwater harvesting",
    "graywater recycling",
    "recycling",
    "composting",
}

construction_features = {
    "rammed earth walls",
    "straw bales insulation",
    "reclaimed wood",
    "recycled bricks",
    "recycled concrete",
    "green roofs",
    "metal roofs",
    "energy-efficient windows",
    "daylighting systems"
}

nature_features = {
    "tree",
    "bush",
    "flower bed",
    "patio",
    "gazebo",
    "garden sculpture",
    "vegetable garden",
    "herb garden",
    "hedge",
    "fountain"
}

features = ["daylighting systems", "composting"]
max_score = 100
score = 0

for feature in features:
    if feature in house_features or construction_features:
        score += 7.8
    
if score > max_score:
    score = score - abs(score - max_score) / 2

print(score)