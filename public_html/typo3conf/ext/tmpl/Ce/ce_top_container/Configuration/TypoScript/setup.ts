tt_content.ce_top_container = COA
tt_content.ce_top_container.20 = FLUIDTEMPLATE
tt_content.ce_top_container.20 {
    templateName = Template
    templateRootPaths.100 = EXT:tmpl/Ce/ce_top_container/Resources/Private/Templates/
    partialRootPaths.100 = EXT:tmpl/Ce/ce_top_container/Resources/Private/Partials/
    layoutRootPaths.100 = EXT:tmpl/Ce/ce_top_container/Resources/Private/Layouts/

    dataProcessing {
        10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
        10 {
            references.fieldName = image
            as = images
        }
    }

}