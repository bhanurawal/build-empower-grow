# Triverge Complete WordPress Export

This folder contains a **complete export** of the entire Triverge website for WordPress import.

## Export Files

| File | Description |
|------|-------------|
| `triverge-complete-export.xml` | WordPress WXR format - Primary import file |
| `triverge-complete-export.json` | JSON format - For page builders (Elementor, Divi, etc.) |

## What's Included

### Pages (4)
- **Home** - Full homepage with hero, services overview, philosophy preview, CTA sections
- **Philosophy** - Complete philosophy page with comparison tables and core principles
- **Services** - All 6 services with descriptions and benefits
- **Contact** - Contact form, contact info, and office hours

### Blog Posts (6)
| Title | Category | Read Time |
|-------|----------|-----------|
| Why Traditional Consulting is Broken | Industry Insights | 8 min |
| Building a Culture of Continuous Improvement | Best Practices | 10 min |
| The ROI of Empowerment | Thought Leadership | 12 min |
| Scaling Agile Without Losing Your Soul | Agile Transformation | 9 min |
| The Mentor's Handbook | Best Practices | 11 min |
| When to Build vs. When to Buy | Strategy | 7 min |

### Case Studies (4)
| Company | Industry |
|---------|----------|
| Global Financial Services Leader | Banking & Finance |
| Regional Healthcare Provider | Healthcare |
| Industrial Sector Leader | Environmental & Industrial |
| Manufacturing Conglomerate | Manufacturing |

### Categories
- Industry Insights
- Best Practices
- Thought Leadership
- Agile Transformation
- Strategy

### Tags (Industries)
- Banking & Finance
- Healthcare
- Environmental & Industrial
- Manufacturing

---

## WordPress Import Instructions

### Step 1: Install WordPress Importer
1. Go to **Tools → Import** in WordPress admin
2. Click **WordPress** and install the importer
3. Click **Run Importer**

### Step 2: Upload the XML File
1. Click **Choose File** and select `triverge-complete-export.xml`
2. Click **Upload file and import**
3. Assign posts to an existing user or create a new one
4. Check **Download and import file attachments**
5. Click **Submit**

### Step 3: Set Up Custom Post Type for Case Studies
Case Studies use a custom post type `case_study`. Choose one option:

**Option A: Use Custom Post Type UI Plugin (Recommended)**
1. Install and activate **Custom Post Type UI** plugin
2. Create new post type:
   - Post Type Slug: `case_study`
   - Plural Label: `Case Studies`
   - Singular Label: `Case Study`
3. Re-import the XML file

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

### Step 4: Create Navigation Menu
1. Go to **Appearance → Menus**
2. Create a new menu called "Main Navigation"
3. Add pages: Services, Case Studies, Philosophy, Blog, Contact
4. Assign to Primary Menu location

### Step 5: Set Homepage
1. Go to **Settings → Reading**
2. Select **A static page**
3. Set Homepage to "Home"
4. Set Posts page to a new "Blog" page (or leave blank)

---

## Post-Import Checklist

- [ ] Upload logo (`triverge-logo.png`) to Media Library
- [ ] Upload hero image to Media Library and set as featured image
- [ ] Install contact form plugin (Contact Form 7 or WPForms)
- [ ] Create contact form and replace shortcode on Contact page
- [ ] Set up Case Studies custom post type
- [ ] Configure navigation menus
- [ ] Set homepage as static front page
- [ ] Install and configure theme that matches design
- [ ] Test all internal links
- [ ] Configure SEO plugin (Yoast, Rank Math, etc.)

---

## Custom Fields Reference

### Blog Posts
| Field | Description |
|-------|-------------|
| `read_time` | Estimated reading time (e.g., "8 min read") |

### Case Studies
| Field | Description |
|-------|-------------|
| `industry` | Industry classification tag |

---

## Using the JSON Export

The JSON file (`triverge-complete-export.json`) is structured for easy use with:

- **Elementor**: Import sections as templates
- **Divi**: Use content for Divi Builder layouts
- **Gutenberg**: Reference content structure for block patterns
- **Custom Development**: API-ready data structure

### JSON Structure
```
{
  "site": { ... },           // Site settings
  "settings": { ... },       // Logo, contact info, stats
  "navigation": { ... },     // Menu structure
  "pages": [ ... ],          // All pages with sections
  "blog": { ... },           // Blog settings and posts
  "caseStudies": { ... },    // Case study settings and content
  "footer": { ... }          // Footer content
}
```

---

## Recommended WordPress Plugins

| Plugin | Purpose |
|--------|---------|
| Custom Post Type UI | Case Studies post type |
| Contact Form 7 or WPForms | Contact form functionality |
| Yoast SEO or Rank Math | SEO optimization |
| Elementor or Divi | Page builder (for JSON import) |
| Advanced Custom Fields | Custom fields management |

---

## Support

For questions about the export or import process, refer to:
- [WordPress Import/Export Documentation](https://wordpress.org/support/article/importing-content/)
- [Custom Post Type UI Documentation](https://github.com/WebDevStudios/custom-post-type-ui)
