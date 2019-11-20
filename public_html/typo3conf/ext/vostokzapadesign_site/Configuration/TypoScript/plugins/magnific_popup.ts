//
// Setup for image-lightbox
//

plugin.tx_jhmagnificpopup {
    view {
        templateRootPath = {$plugin.tx_jhmagnificpopup.view.templateRootPath}
        partialRootPath = {$plugin.tx_jhmagnificpopup.view.partialRootPath}
        layoutRootPath = {$plugin.tx_jhmagnificpopup.view.layoutRootPath}
    }
    persistence {
        storagePid = {$plugin.tx_jhmagnificpopup.persistence.storagePid}
    }
    features {
        # uncomment the following line to enable the new Property Mapper.
        # rewrittenPropertyMapper = 1
    }
}

# Add css files to page
page.includeCSS {
    tx_jhmagnificpopup10 = {$plugin.tx_jhmagnificpopup.includeMagnificpopupCss}
    tx_jhmagnificpopup10.if.isTrue = {$plugin.tx_jhmagnificpopup.includeMagnificpopupCss}
}

# Add JavaScript files to page
page.includeJSFooterlibs {
    tx_jhmagnificpopup10 = EXT:jh_magnificpopup/Resources/Public/js/jquery-1.12.3.min.js
    tx_jhmagnificpopup10.forceOnTop = 1
    tx_jhmagnificpopup10.if.isTrue = {$plugin.tx_jhmagnificpopup.includejquerycore}

    tx_jhmagnificpopup20 = {$plugin.tx_jhmagnificpopup.includeMagnificpopupJs}
    tx_jhmagnificpopup20.if.isTrue = {$plugin.tx_jhmagnificpopup.includeMagnificpopupJs}

    tx_jhmagnificpopup25 = {$plugin.tx_jhmagnificpopup.includeFilterIsImageFileJs}
    tx_jhmagnificpopup25.if.isTrue = {$plugin.tx_jhmagnificpopup.includeFilterIsImageFileJs}
}

# Config tx_news if support is set
[globalVar = LIT:1 = {$plugin.tx_jhmagnificpopup.magnificpopup.support.tx_news}]
    plugin.tx_news.settings.detail.media.image {
        lightbox = magnificpopup
    }
[global]

plugin.tx_jhmagnificpopup {
    settings {
        magnificpopup {
            # Add some selectors if support is activated
            selector = COA
            selector {
                # default selector (css_styled_content and fluid_styled_content)
                1 = TEXT
                1.value = .csc-textpic-imagewrap,.ce-textpic,.row
                # tx_news
                10 = TEXT
                10.value = ,.news-img-wrap
                10.if.isTrue = {$plugin.tx_jhmagnificpopup.magnificpopup.support.tx_news}
                # tx_ttnews - single-view
                20 = TEXT
                20.value = ,.news-single-item
                20.if.isTrue = {$plugin.tx_jhmagnificpopup.magnificpopup.support.tx_ttnews.single}
                # tx_ttnews - list-view
                21 = TEXT
                21.value = ,.news-list-container
                21.if.isTrue = {$plugin.tx_jhmagnificpopup.magnificpopup.support.tx_ttnews.list}
                # tx_ttnews - single-view
                22 = TEXT
                22.value = ,.news-latest-container
                22.if.isTrue = {$plugin.tx_jhmagnificpopup.magnificpopup.support.tx_ttnews.latest}
                # bootstrap_package
                30 = TEXT
                30.value = ,.img-wrap,.image-wrap
                30.if.isTrue = {$plugin.tx_jhmagnificpopup.magnificpopup.support.tx_bootstrappackage}
                # user-defined selectors (always start with ','!)
                999 = TEXT
                999.value = ,{$plugin.tx_jhmagnificpopup.magnificpopup.support.user}
                999.insertData = 1
                999.if.isTrue = {$plugin.tx_jhmagnificpopup.magnificpopup.support.user}
            }
            templateVariables = COA
            templateVariables {
                mainClass = COA
                mainClass {
                    #default selector
                    1 = TEXT
                    1.value = mfp-img-mobile
                    # user defined selector
                    10 = TEXT
                    10.value = {$plugin.tx_jhmagnificpopup.magnificpopup.mainClass}
                    10.noTrimWrap= | ||
                    10.insertData = 1
                    10.if.isTrue = {$plugin.tx_jhmagnificpopup.magnificpopup.mainClass}
                }
                galleryEnabled = TEXT
                galleryEnabled.value = {$plugin.tx_jhmagnificpopup.magnificpopup.gallery.enabled}
                galleryPreload = TEXT
                galleryPreload.value = [{$plugin.tx_jhmagnificpopup.magnificpopup.gallery.preload.before},{$plugin.tx_jhmagnificpopup.magnificpopup.gallery.preload.after}]
                galleryNavigateByImgClick = TEXT
                galleryNavigateByImgClick.value = {$plugin.tx_jhmagnificpopup.magnificpopup.gallery.navigateByImgClick}
                imageCursor = TEXT
                imageCursor.value = {$plugin.tx_jhmagnificpopup.magnificpopup.image.cursor}
                imageVerticalGap = TEXT
                imageVerticalGap.value = {$plugin.tx_jhmagnificpopup.magnificpopup.image.verticalGap}
                imageVerticalFit = TEXT
                imageVerticalFit.value = {$plugin.tx_jhmagnificpopup.magnificpopup.image.verticalFit}
                removalDelay = TEXT
                removalDelay.value = {$plugin.tx_jhmagnificpopup.magnificpopup.removalDelay}
            }
        }
    }
    # Copy actual page.jsFooterInline to setup to prevent from data-loss
    setup < page.jsFooterInline
    setup {
        # add fluidtemplate
        109 = FLUIDTEMPLATE
        109 {
            file = {$plugin.tx_jhmagnificpopup.view.templateRootPath}TypoScript/Default.html
            variables {
                selector < plugin.tx_jhmagnificpopup.settings.magnificpopup.selector
            }
        }
    }
}

//add javascript to footer
page.jsFooterInline < plugin.tx_jhmagnificpopup.setup