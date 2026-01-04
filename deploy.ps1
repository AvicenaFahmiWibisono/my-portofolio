# Quick Deploy Script for cPanel

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Portfolio Static Export to cPanel" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Build
Write-Host "[1/3] Building static files..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "✓ Build successful!" -ForegroundColor Green
} else {
    Write-Host "✗ Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Step 2: Prepare ZIP
Write-Host "[2/3] Creating deployment ZIP..." -ForegroundColor Yellow

$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
$zipFile = "portfolio_deploy_$timestamp.zip"

if (Test-Path $zipFile) {
    Remove-Item $zipFile
}

# Create ZIP from out folder
Compress-Archive -Path "out\*" -DestinationPath $zipFile

Write-Host "✓ ZIP created: $zipFile" -ForegroundColor Green
Write-Host ""

# Step 3: Instructions
Write-Host "[3/3] Deployment Instructions:" -ForegroundColor Yellow
Write-Host ""
Write-Host "UPLOAD FILES TO CPANEL:" -ForegroundColor Cyan
Write-Host "----------------------" -ForegroundColor Cyan
Write-Host "1. Login to cPanel File Manager"
Write-Host "2. Navigate to public_html (or your domain folder)"
Write-Host "3. Upload: $zipFile"
Write-Host "4. Extract the ZIP file"
Write-Host "5. Set sendmail.php permissions to 644"
Write-Host "6. Visit your domain to test!"
Write-Host ""
Write-Host "FILES LOCATION: portfolio-dark\out\" -ForegroundColor Magenta
Write-Host "ZIP FILE: $zipFile" -ForegroundColor Magenta
Write-Host ""
Write-Host "✓ Ready to deploy!" -ForegroundColor Green
Write-Host ""
Write-Host "Need help? Check DEPLOYMENT_GUIDE.md" -ForegroundColor Gray
Write-Host "========================================" -ForegroundColor Cyan
