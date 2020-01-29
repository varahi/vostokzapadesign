plugin.tx_tmpl_tmpl {
    view {
        templateRootPaths.0 = EXT:tmpl/Resources/Private/Templates/
        templateRootPaths.1 = {$plugin.tx_tmpl_tmpl.view.templateRootPath}
        partialRootPaths.0 = EXT:tmpl/Resources/Private/Partials/
        partialRootPaths.1 = {$plugin.tx_tmpl_tmpl.view.partialRootPath}
        layoutRootPaths.0 = EXT:tmpl/Resources/Private/Layouts/
        layoutRootPaths.1 = {$plugin.tx_tmpl_tmpl.view.layoutRootPath}
    }
    persistence {
        storagePid = {$plugin.tx_tmpl_tmpl.persistence.storagePid}
    #recursive = 1
    }
    features {
    #skipDefaultArguments = 1
    # if set to 1, the enable fields are ignored in BE context
        ignoreAllEnableFieldsInBe = 0
    # Should be on by default, but can be disabled if all action in the plugin are uncached
        requireCHashArgumentForActionArguments = 1
    }
    mvc {
    #callDefaultActionIfActionCantBeResolved = 1
    }
}