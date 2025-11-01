# Shopify Menu Setup Guide

## Overview
This guide explains how to set up a navigation menu in your Shopify admin that will be displayed on your website with support for nested (dropdown) menus.

## Menu Structure
The navigation bar supports:
- Up to 5 main menu items (or more if needed)
- One or more items can have secondary (dropdown) menus
- Fully responsive design for mobile and desktop

## Setting Up Your Menu in Shopify Admin

### Step 1: Access Navigation Settings
1. Log in to your Shopify admin panel
2. Go to **Online Store** → **Navigation**
3. Click on **Main menu** or create a new menu

### Step 2: Create Menu Handle
The menu handle should be: `next-js-frontend-header-menu`

If you want to use a different handle, update it in `components/layout/navbar/index.tsx`:
```typescript
const menu = await getMenu('your-custom-menu-handle');
```

### Step 3: Add Menu Items

#### Example Menu Structure (5 items with 1 having sub-items):

**Main Menu Items:**
1. **Home** → `/`
2. **Shop** → `/search` (with dropdown)
   - Fiction → `/search/fiction`
   - Non-Fiction → `/search/non-fiction`
   - Best Sellers → `/search/best-sellers`
   - New Arrivals → `/search/new-arrivals`
3. **Categories** → `/search`
4. **About** → `/about`
5. **Contact** → `/contact`

### Step 4: Adding Menu Items in Shopify

1. Click **Add menu item**
2. Enter the **Name** (e.g., "Home")
3. Enter the **Link** (e.g., `/` or select from dropdown)
4. Click **Add**

### Step 5: Creating Nested Menu Items (Dropdown)

To create a dropdown menu:
1. Add the parent menu item first (e.g., "Shop")
2. Click **Add menu item** again
3. Enter the sub-item name (e.g., "Fiction")
4. Enter the link
5. **Drag and drop** the sub-item slightly to the right under the parent item
6. The sub-item will indent, indicating it's now a child item
7. Repeat for all sub-items

### Step 6: Reorder Menu Items
- Drag and drop menu items to reorder them
- Ensure nested items are properly indented under their parent

### Step 7: Save Your Menu
Click **Save menu** at the top right

## Menu Features

### Desktop View
- Horizontal navigation bar
- Hover over items with dropdowns to see sub-menu
- Smooth animations and transitions
- Blue accent color on hover

### Mobile View
- Hamburger menu icon
- Full-screen slide-out menu
- Sub-items displayed with bullet points
- Easy touch navigation

## Styling Customization

The navigation bar styling can be customized in `components/layout/navbar/index.tsx`:

### Colors
- Primary hover color: `hover:text-blue-600`
- Background: `bg-white/95` (semi-transparent white)
- Border: `border-neutral-200`

### Dropdown Menu
- Background: `bg-white`
- Shadow: `shadow-lg`
- Border radius: `rounded-lg`

### Top Bar
- Gradient background: `from-blue-50 to-indigo-50`
- Welcome message customizable

## Testing Your Menu

1. Save your changes in Shopify
2. The menu will automatically appear on your website
3. Test on both desktop and mobile devices
4. Verify dropdown functionality
5. Check all links work correctly

## Troubleshooting

### Menu Not Appearing
- Verify the menu handle matches: `next-js-frontend-header-menu`
- Check that menu items are published
- Ensure menu has at least one item

### Dropdown Not Working
- Verify sub-items are properly nested (indented) in Shopify admin
- Check that parent item has the correct structure
- Clear browser cache and reload

### Styling Issues
- Check Tailwind CSS classes are properly applied
- Verify dark mode classes if using dark theme
- Inspect browser console for errors

## Best Practices

1. **Keep it Simple**: 5-7 main items is ideal
2. **Logical Grouping**: Group related items under dropdowns
3. **Clear Labels**: Use descriptive, concise menu item names
4. **Test Navigation**: Verify all links work before going live
5. **Mobile First**: Always test on mobile devices
6. **Accessibility**: Ensure keyboard navigation works

## Advanced Customization

To modify the navigation behavior or styling:
- Edit `components/layout/navbar/index.tsx` for desktop menu
- Edit `components/layout/navbar/mobile-menu.tsx` for mobile menu
- Update `lib/shopify/queries/menu.ts` to fetch additional menu data
- Modify `lib/shopify/types.ts` to add custom menu properties

## Support

For issues or questions:
1. Check Shopify documentation on Navigation
2. Review the code in the navbar components
3. Test menu structure in Shopify admin
4. Verify GraphQL query is fetching correct data
