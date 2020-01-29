tx_csseo {
    1 = tx_fuchscatalog_domain_model_item
    1.enable = GP:tx_fuchscatalog_fuchscatalog|item
    1.fallback {
        title = title
        description = teaser
    }

    2 = tx_news_domain_model_news
    2.enable = GP:tx_news_pi1|news
    2.fallback {
        title = title
        description = description
    }

    3 = tx_fuchsdealers_domain_model_dealer
    3.enable = GP:tx_fuchsdealers_fuchsdealers|dealer
    3.fallback {
        title = title
        description = description
    }
}