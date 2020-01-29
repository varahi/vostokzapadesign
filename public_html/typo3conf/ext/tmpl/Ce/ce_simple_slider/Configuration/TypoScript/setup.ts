lib.contentElement {
	templateRootPaths {
		100 = EXT:tmpl/Ce/ce_simple_slider/Resources/Private/Templates
	}
	partialRootPaths {
		100 = EXT:tmpl/Ce/ce_simple_slider/Resources/Private/Partials
	}
	layoutRootPaths {
		100 = EXT:tmpl/Ce/ce_simple_slider/Resources/Private/Layouts
	}		
}
tt_content {
	ce_slider < lib.contentElement
	ce_slider {
		templateName = SimpleSlider
		dataProcessing {
			10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
			10 {
				references.fieldName = assets
			}
			//20 = T3Dev\Tmpl\DataProcessing\FilesProcessor
		}
	}
}