# 🚀 Deployment Guide - cPanel Static Hosting

## 📦 Files to Upload

All files are located in the **`out/`** folder after running `npm run build`.

---

## 🔧 Step-by-Step Deployment to cPanel

### **Step 1: Access cPanel File Manager**

1. Login to your cPanel
2. Navigate to **File Manager**
3. Go to `public_html` (or your domain's document root)

---

### **Step 2: Upload Files**

Upload ALL contents from `out/` folder to your cPanel:

```
portfolio-dark/out/
├── index.html           ← Main page
├── sendmail.php         ← Contact form handler
├── _next/               ← Next.js assets (CSS, JS)
├── assets/              ← Images & media
├── favicon.ico
└── other files...
```

**Methods to upload:**
- **Option A:** Drag & drop in File Manager
- **Option B:** Upload as ZIP then extract
- **Option C:** Use FTP client (FileZilla, etc.)

---

### **Step 3: Set File Permissions**

**Important!** Set proper permissions for PHP file:

```
sendmail.php → 644 (or 755 if needed)
```

Right-click file → **Change Permissions** → Set to `644`

---

### **Step 4: Verify PHP Configuration**

Make sure your hosting supports:
- ✅ PHP 7.4+ or 8.x
- ✅ PHP `mail()` function enabled
- ✅ SMTP configured

Test by accessing: `https://yourdomain.com/sendmail.php`
(Should show blank or JSON error - that's normal)

---

### **Step 5: Update Email Addresses (if needed)**

If you want to change recipient emails, edit `sendmail.php`:

```php
// Line 43-46
$recipients = [
    'avicena@avicenafahmi.com',
    'avicenafw@gmail.com'
];
```

---

### **Step 6: Test Your Website**

1. **Visit:** `https://yourdomain.com`
2. **Check:** All pages load correctly
3. **Test Contact Form:**
   - Fill name, email, message
   - Click "Send Message"
   - Should see success message
   - Check both emails for received message

---

## 🎯 Domain Configuration

### **If using subdomain (e.g., portfolio.avicenafahmi.com):**

1. Go to cPanel → **Subdomains**
2. Create subdomain → Point to folder with uploaded files
3. Access via: `https://portfolio.avicenafahmi.com`

### **If using main domain:**

1. Upload files directly to `public_html/`
2. Access via: `https://avicenafahmi.com`

---

## 🔍 Troubleshooting

### **Contact Form Not Working?**

**Issue:** Email not sending
**Solutions:**
1. Check PHP `mail()` is enabled
2. Verify SMTP settings in cPanel
3. Check spam folder
4. Enable error reporting in `sendmail.php`:
   ```php
   error_reporting(E_ALL);
   ini_set('display_errors', 1);
   ```

---

### **Images Not Loading?**

**Issue:** Broken images
**Solutions:**
1. Check file paths are correct
2. Verify `assets/image/` folder uploaded
3. Check file permissions (644 for files, 755 for folders)

---

### **Blank Page / 500 Error?**

**Issue:** Server error
**Solutions:**
1. Check `.htaccess` file (create if needed)
2. Set proper PHP version in cPanel
3. Check error logs in cPanel

---

## 📝 .htaccess Configuration (Optional)

Create `.htaccess` in document root for clean URLs:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Redirect to HTTPS
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  
  # Handle trailing slashes
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_URI} !(.*)/$
  RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1/ [L,R=301]
</IfModule>
```

---

## 🎨 Future Updates

To update website:

1. Make changes in local files
2. Run `npm run build`
3. Upload new `out/` folder contents to cPanel
4. Overwrite existing files

---

## ✅ Checklist Before Going Live

- [ ] All files uploaded to cPanel
- [ ] `sendmail.php` has correct permissions (644)
- [ ] PHP version set (7.4+ or 8.x)
- [ ] Email addresses configured correctly
- [ ] Contact form tested and working
- [ ] All images loading properly
- [ ] SSL certificate active (HTTPS)
- [ ] Domain/subdomain pointing correctly
- [ ] Tested on mobile & desktop
- [ ] Browser cache cleared for testing

---

## 📞 Support

If you encounter issues:
1. Check cPanel error logs
2. Test `sendmail.php` directly
3. Verify PHP configuration
4. Contact hosting support if needed

---

## 🎉 Your Portfolio is Ready!

**Live URL:** `https://yourdomain.com`

**Features:**
- ✅ Fully responsive design
- ✅ Dark mode interface
- ✅ Multi-language (EN/ID)
- ✅ Working contact form
- ✅ Project galleries
- ✅ Fast loading (static files)

Good luck with your portfolio! 🚀
