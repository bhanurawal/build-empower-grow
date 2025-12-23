# Triverge WordPress Content Export

This folder contains the Triverge website content exported in WordPress-compatible formats.

## Files Included

### 1. `triverge-content.xml` (WordPress WXR Format)
The primary import file for WordPress. This is the standard WordPress eXtended RSS (WXR) format.

**Includes:**
- 2 Pages (Philosophy, Services)
- 6 Blog Posts with categories
- 4 Case Studies (as custom post type)
- Categories and Tags

### 2. `triverge-content.json` (JSON Format)
Alternative format for use with page builders (Elementor, Divi) or custom import plugins.

---

## Import Instructions for WordPress

### Step 1: Install WordPress Importer
1. Go to **Tools → Import** in WordPress admin
2. Click **WordPress** and install the importer if not already installed
3. Click **Run Importer**

### Step 2: Upload the XML File
1. Click **Choose File** and select `triverge-content.xml`
2. Click **Upload file and import**

### Step 3: Assign Authors
1. Choose to assign imported posts to an existing user or create a new one
2. Check **Download and import file attachments** if you want to import media
3. Click **Submit**

### Step 4: Set Up Case Studies Custom Post Type
The export includes Case Studies as a custom post type. You'll need to either:

**Option A: Use a Plugin**
- Install **Custom Post Type UI** plugin
- Create a new post type called `case_study` with slug `case-studies`
- Re-import the XML file

**Option B: Add to theme's functions.php**
```php
function register_case_study_post_type() {
    register_post_type('case_study', array(
        'labels' => array(
            'name' => 'Case Studies',
            'singular_name' => 'Case Study'
        ),
        'public' => true,
        'has_archive' => true,
        'rewrite' => array('slug' => 'case-studies'),
        'supports' => array('title', 'editor', 'excerpt', 'thumbnail'),
        'menu_icon' => 'dashicons-portfolio'
    ));
}
add_action('init', 'register_case_study_post_type');
```

---

## Content Structure

### Pages
| Title | Slug | Description |
|-------|------|-------------|
| Our Philosophy | `/philosophy` | Company philosophy and approach comparison |
| Our Services | `/services` | 6 service offerings with benefits |

### Blog Categories
- Industry Insights
- Best Practices
- Thought Leadership
- Agile Transformation
- Strategy

### Case Study Industries (Tags)
- Banking & Finance
- Healthcare
- Environmental & Industrial
- Manufacturing

---

## Custom Fields Used

### Blog Posts
- `read_time` - Estimated reading time (e.g., "8 min read")

### Case Studies
- `industry` - Industry classification

---

## Notes

1. **Images**: The export does not include images. Upload the logo and any other images separately to WordPress Media Library.

2. **Theme Styling**: The content uses basic HTML formatting. Apply your WordPress theme styles or use a page builder for custom layouts.

3. **Navigation**: After import, create a WordPress menu under **Appearance → Menus** to match the original site navigation.

4. **Contact Page**: Not included in export - create manually in WordPress with a contact form plugin (WPForms, Contact Form 7, etc.)
