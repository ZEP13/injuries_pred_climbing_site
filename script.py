import random

body_parts = ['doigt', 'épaule', 'poignet', 'coude', 'dos']
pain_types = ['aigu', 'doux', 'brûlant', 'pulsatile', 'lancinant']
risk_levels = ['faible', 'modéré', 'élevé']
advices = {
    'faible': [
        'Étirements et reprise progressive.',
        'Repos suffisant.',
        'Repos léger et suivi.',
        'Surveillance régulière conseillée.'
    ],
    'modéré': [
        'Repos et suivi attentif recommandés.',
        'Surmenage probable, repos conseillé.',
        'Repos et kinésithérapie conseillés.',
        'Repos et étirements recommandés.'
    ],
    'élevé': [
        'Repos et consultation conseillés pour blessure probable.',
        'Consultation urgente recommandée.',
        'Surveillance renforcée, consulter si aggravation.',
        'Repos complet et suivi médical nécessaire.'
    ]
}

def generate_previous_injury():
    # 30% chance que la zone ait déjà été blessée
    return random.random() < 0.3

def generate_data_line(id):
    body_part = random.choice(body_parts)
    pain_type = random.choice(pain_types)
    duration = random.randint(1, 30)
    pain_during_climb = random.choice([True, False])
    heard_crack = random.choice([True, False])
    previous_injury = generate_previous_injury()
    
    # On peut améliorer la cohérence en liant previousInjury uniquement si la zone est la même
    # Ici c’est synthétique donc ok comme ça.
    
    # On adapte le risque en fonction de quelques règles simples (exemple)
    if heard_crack or (duration > 14 and pain_during_climb):
        risk = 'élevé'
    elif duration > 7:
        risk = 'modéré'
    else:
        risk = 'faible'

    advice = random.choice(advices[risk])
    
    return f"('{body_part}', '{pain_type}', {duration}, {str(pain_during_climb).upper()}, {str(heard_crack).upper()}, {str(previous_injury).upper()}, '{risk}', '{advice}')"

# Génération du fichier SQL
with open('injury_data_1000.sql', 'w', encoding='utf-8') as f:
    f.write("""CREATE TABLE InjuryData (
  id SERIAL PRIMARY KEY,
  bodyPart VARCHAR(20),
  painType VARCHAR(20),
  durationDays INT,
  painDuringClimb BOOLEAN,
  heardCrack BOOLEAN,
  previousInjury BOOLEAN,
  riskLevel VARCHAR(10),
  advice TEXT
);

INSERT INTO InjuryData (bodyPart, painType, durationDays, painDuringClimb, heardCrack, previousInjury, riskLevel, advice) VALUES
""")
    for i in range(1000):
        line_end = "," if i < 999 else ";"
        f.write(generate_data_line(i) + line_end + "\n")

print("Fichier injury_data_1000.sql généré avec 1000 lignes.")
