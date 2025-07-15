#!/usr/bin/env python3
"""
Logo Proportion Calculator for Orson Vision Digital Vérité Brand
Calculates exact bracket positions and text positioning for any target size
based on the original 600x200 logo proportions.
"""

import math

def calculate_logo_proportions(target_width, target_height):
    """
    Calculate exact proportions for any target size based on original 600x200 logo.

    Original logo measurements:
    - Width: 600px, Height: 200px
    - Left bracket: x=50, y=50, width=8, height=100
    - Right bracket: x=542, y=50, width=8, height=100
    - Text: centered between brackets
    """

    # Original logo dimensions
    original_width = 600
    original_height = 200

    # Original bracket measurements
    left_bracket = {
        'x': 50,
        'y': 50,
        'width': 8,
        'height': 100
    }

    right_bracket = {
        'x': 542,
        'y': 50,
        'width': 8,
        'height': 100
    }

    # Calculate scale factors
    scale_x = target_width / original_width
    scale_y = target_height / original_height

    # Scale brackets
    scaled_left_bracket = {
        'x': left_bracket['x'] * scale_x,
        'y': left_bracket['y'] * scale_y,
        'width': left_bracket['width'] * scale_x,
        'height': left_bracket['height'] * scale_y
    }

    scaled_right_bracket = {
        'x': right_bracket['x'] * scale_x,
        'y': right_bracket['y'] * scale_y,
        'width': right_bracket['width'] * scale_x,
        'height': right_bracket['height'] * scale_y
    }

    # Calculate text position (centered between brackets)
    text_x = (scaled_left_bracket['x'] + scaled_left_bracket['width'] +
              scaled_right_bracket['x']) / 2
    text_y = target_height / 2

    return {
        'container': {
            'width': target_width,
            'height': target_height
        },
        'left_bracket': scaled_left_bracket,
        'right_bracket': scaled_right_bracket,
        'text': {
            'x': text_x,
            'y': text_y
        },
        'scale_factors': {
            'x': scale_x,
            'y': scale_y
        }
    }

def generate_css(proportions, asset_name):
    """Generate CSS for the calculated proportions."""

    css = f"""/* {asset_name} - {proportions['container']['width']}x{proportions['container']['height']} */
.logo-container {{
    position: relative;
    width: {proportions['container']['width']}px;
    height: {proportions['container']['height']}px;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
}}

.bracket {{
    position: absolute;
    background: #fff;
}}

.left-bracket {{
    left: {proportions['left_bracket']['x']}px;
    top: {proportions['left_bracket']['y']}px;
    width: {proportions['left_bracket']['width']}px;
    height: {proportions['left_bracket']['height']}px;
}}

.right-bracket {{
    left: {proportions['right_bracket']['x']}px;
    top: {proportions['right_bracket']['y']}px;
    width: {proportions['right_bracket']['width']}px;
    height: {proportions['right_bracket']['height']}px;
}}

.logo-text {{
    position: absolute;
    left: {proportions['text']['x']}px;
    top: {proportions['text']['y']}px;
    transform: translate(-50%, -50%);
    color: #fff;
    font-family: 'Arial', sans-serif;
    font-weight: bold;
    font-size: {max(12, proportions['container']['width'] * 0.04)}px;
    text-align: center;
    white-space: nowrap;
}}"""

    return css

def generate_html(proportions, asset_name):
    """Generate complete HTML for the asset."""

    css = generate_css(proportions, asset_name)

    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{asset_name}</title>
    <style>
{css}
    </style>
</head>
<body>
    <div class="logo-container">
        <div class="bracket left-bracket"></div>
        <div class="bracket right-bracket"></div>
        <div class="logo-text">ORSON VISION</div>
    </div>
</body>
</html>"""

    return html

def main():
    """Main function to calculate proportions for different asset sizes."""

    # Define target asset sizes
    assets = {
        'Google Ads Responsive': (1200, 628),
        'Facebook Feed': (1200, 628),
        'LinkedIn Sponsored Content': (1200, 627),
        'Business Card': (350, 200),
        'LinkedIn Profile': (1584, 396),
        'Email Header': (600, 150),
        'Favicon': (32, 32),
        'Loading Animation': (200, 200),
        '404 Error Page': (400, 300)
    }

    print("Orson Vision Digital Vérité Logo Proportion Calculator")
    print("=" * 60)
    print()

    for asset_name, (width, height) in assets.items():
        print(f"📐 {asset_name} ({width}x{height})")
        print("-" * 40)

        proportions = calculate_logo_proportions(width, height)

        print(f"Scale factors: X={proportions['scale_factors']['x']:.3f}, Y={proportions['scale_factors']['y']:.3f}")
        print(f"Left bracket: x={proportions['left_bracket']['x']:.1f}, y={proportions['left_bracket']['y']:.1f}, w={proportions['left_bracket']['width']:.1f}, h={proportions['left_bracket']['height']:.1f}")
        print(f"Right bracket: x={proportions['right_bracket']['x']:.1f}, y={proportions['right_bracket']['y']:.1f}, w={proportions['right_bracket']['width']:.1f}, h={proportions['right_bracket']['height']:.1f}")
        print(f"Text position: x={proportions['text']['x']:.1f}, y={proportions['text']['y']:.1f}")
        print()

        # Generate HTML file
        html_content = generate_html(proportions, asset_name)
        filename = f"orson-vision-{asset_name.lower().replace(' ', '-')}-{width}x{height}.html"

        with open(filename, 'w', encoding='utf-8') as f:
            f.write(html_content)

        print(f"✅ Generated: {filename}")
        print()

if __name__ == "__main__":
    main()
