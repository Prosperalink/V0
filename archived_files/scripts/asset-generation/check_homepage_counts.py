#!/usr/bin/env python3
from pathlib import Path

sections = [
    'homepage/hero_section/images',
    'homepage/solutions_matrix/digital_innovation/images',
    'homepage/solutions_matrix/creative_design/images',
    'homepage/solutions_matrix/content_creation/images',
    'homepage/solutions_matrix/technology_solutions/images',
    'homepage/solutions_matrix/strategic_consulting/images',
    'homepage/client_journey/images',
    'homepage/success_stories/images',
    'homepage/contact_section/images'
]

total = 0
for section in sections:
    count = len(list(Path(section).glob("*.jpg")))
    print(f"{section}: {count} images")
    total += count

print(f"\nTotal homepage images: {total}")
print(f"Average per section: {total/len(sections):.1f}")
