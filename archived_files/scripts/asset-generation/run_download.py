#!/usr/bin/env python3
"""
Orson Vision Website - Asset Download Runner
Installs dependencies and runs the enhanced asset downloader with video resume functionality
"""

import subprocess
import sys
import os
from pathlib import Path

def install_dependencies():
    """Install required dependencies"""
    print("📦 Installing dependencies...")
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "-r", "requirements.txt"])
        print("✅ Dependencies installed successfully!")
        return True
    except subprocess.CalledProcessError as e:
        print(f"❌ Failed to install dependencies: {e}")
        return False

def run_downloader():
    """Run the asset downloader"""
    print("🚀 Starting Orson Vision Asset Downloader...")
    try:
        from download_with_progress import EnhancedAssetDownloader
        downloader = EnhancedAssetDownloader()
        downloader.run_download()
        return True
    except ImportError as e:
        print(f"❌ Import error: {e}")
        print("Make sure all dependencies are installed.")
        return False
    except Exception as e:
        print(f"❌ Error running downloader: {e}")
        return False

def main():
    """Main function"""
    print("=" * 60)
    print("🎬 Orson Vision Website - Asset Downloader")
    print("=" * 60)
    
    # Check if we're in the right directory
    if not Path("download_with_progress.py").exists():
        print("❌ Error: download_with_progress.py not found in current directory")
        print("Please run this script from the website_assets directory")
        return False
    
    # Install dependencies
    if not install_dependencies():
        return False
    
    # Run the downloader
    if not run_downloader():
        return False
    
    print("\n🎉 Asset download process completed successfully!")
    return True

if __name__ == "__main__":
    success = main()
    sys.exit(0 if success else 1) 