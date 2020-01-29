tt_content.ce_about_section = COA
tt_content.ce_about_section.20 = FLUIDTEMPLATE
tt_content.ce_about_section.20 {
    templateName = Template

#file = EXT:tmpl/Ce/ce_about_section/Resources/Private/Templates/Template.html

    templateRootPaths.100 = EXT:tmpl/Ce/ce_about_section/Resources/Private/Templates/
    partialRootPaths.100 = EXT:tmpl/Ce/ce_about_section/Resources/Private/Partials/
    layoutRootPaths.100 = EXT:tmpl/Ce/ce_about_section/Resources/Private/Layouts/

    dataProcessing {
        10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
        10 {
            references.fieldName = image
            as = images
        }
    }

}