# **************************************************
# Add the teaser to the "New Content Element Wizard"
# **************************************************
mod.wizards.newContentElement.wizardItems.common {
    elements {
        ce_about_section {
            iconIdentifier = content-image
            title = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:ce.about_section_title
            description = LLL:EXT:tmpl/Resources/Private/Language/locallang_db.xlf:ce.about_section_description
            tt_content_defValues {
                CType = ce_about_section
            }
        }
    }
    show := addToList(ce_about_section)
}