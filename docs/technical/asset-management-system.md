# Asset Management System

## Overview

The Orson Vision Asset Management System provides automated tools for tracking, validating, and generating placeholder assets for the project. This system helps prevent 404 errors and ensures all referenced assets exist.

## Features

### 1. Asset Scanning

- Automatically scans all assets in the `public/assets/` directory
- Categorizes assets by type (images, videos, logos, etc.)
- Generates detailed reports on asset usage

### 2. Missing Asset Detection

- Scans code files for asset references
- Identifies missing assets that are referenced but don't exist
- Provides detailed reports on missing assets

### 3. Placeholder Generation

- Creates SVG placeholders for missing images
- Generates text placeholders for missing videos
- Uses consistent styling matching the project's design system

## File Structure

```
scripts/
├── generate-placeholder-assets.js    # One-time placeholder generation
└── asset-management.js               # Comprehensive asset management tool

public/assets/
├── about/                           # About page assets
├── portfolio/                       # Portfolio assets
├── logos/                          # Logo assets
├── testimonials/                   # Testimonial assets
├── videos/                         # Video assets
└── images/                         # General image assets
```

## Usage

### Generate Asset Report

```bash
node scripts/asset-management.js report
```

### Fix Missing Assets

```bash
node scripts/asset-management.js fix
```

### Scan Existing Assets

```bash
node scripts/asset-management.js scan
```

## Asset Categories

### About Page Assets

- **Location**: `public/assets/about/`
- **Types**: Images for team, mission, values, story sections
- **Dimensions**: 800x600 (standard), 400x400 (team photos)

### Portfolio Assets

- **Location**: `public/assets/portfolio/`
- **Types**: Project showcase images
- **Dimensions**: 600x400 (landscape)

### Logo Assets

- **Location**: `public/assets/logos/`
- **Types**: Client and partner logos
- **Dimensions**: 300x100 (horizontal)

### Testimonial Assets

- **Location**: `public/assets/testimonials/`
- **Types**: Client testimonial photos
- **Dimensions**: 400x400 (square)

### Video Assets

- **Location**: `public/assets/videos/`
- **Types**: Promotional and testimonial videos
- **Placeholders**: Text files with metadata

## Placeholder Design

### SVG Placeholders

- **Background**: Dark theme colors matching project design
- **Border**: Golden dashed border for cinematic effect
- **Text**: Asset name and dimensions
- **Colors**:
  - Background: Category-specific dark colors
  - Text: Golden accent (#ffd700)
  - Border: Golden accent with dashed pattern

### Video Placeholders

- **Format**: Text files with metadata
- **Content**: Asset name, category, and dimensions
- **Extension**: `.txt` instead of `.mp4`

## Integration with Development Workflow

### Pre-commit Checks

The asset management system can be integrated into pre-commit hooks to ensure all referenced assets exist before code is committed.

### Build-time Validation

During the build process, the system validates that all assets referenced in the code exist in the public directory.

### Development Server

The development server will no longer show 404 errors for missing assets, as placeholders are automatically generated.

## Troubleshooting

### Common Issues

1. **404 Errors Still Appearing**
   - Run `node scripts/asset-management.js fix` to generate missing placeholders
   - Check that asset paths in code match the actual file locations

2. **Placeholder Not Generated**
   - Ensure the script has write permissions to the public directory
   - Check that the asset path is correctly formatted

3. **Build Errors**
   - Clear the `.next` cache: `rmdir /s /q .next`
   - Reinstall dependencies: `npm install`
   - Restart the development server: `npm run dev`

### Asset Path Conventions

- Use relative paths starting with `/assets/`
- Follow the established directory structure
- Use kebab-case for filenames
- Include descriptive names that indicate content

## Future Enhancements

### Planned Features

- Automatic asset optimization
- WebP format conversion
- Responsive image generation
- Asset compression and optimization
- Integration with CDN services

### Performance Optimizations

- Asset lazy loading
- Progressive image loading
- Video thumbnail generation
- Asset caching strategies

## Maintenance

### Regular Tasks

- Run asset reports weekly
- Update placeholder designs as needed
- Monitor for new missing assets
- Optimize existing assets

### Documentation Updates

- Keep this documentation current
- Update asset categories as needed
- Document new asset types and conventions

---

_Last Updated: December 2024_
_Version: 1.0_
_Status: Active_
