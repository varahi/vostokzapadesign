// Set catalog storages
// Products
//[PIDinRootline = 3]
//plugin.tx_fuchscatalog.persistence.storagePid = 22,14
// Oils
//[PIDinRootline = 2]
//plugin.tx_fuchscatalog.persistence.storagePid = 22,37
//[global]

plugin.tx_fuchscatalog {
    settings {
        parentCategories = 17
    }
    persistence {
        storagePid = 14, 22, 37
    }
}