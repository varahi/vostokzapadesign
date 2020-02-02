<?php

namespace T3Ddev\Tmpl\Provider;

use TYPO3\CMS\Core\PageTitle\AbstractPageTitleProvider;

/**
 * Class PageTitleProvider
 *
 * To be used from within eg. MyController->showAction or in a ViewHelper
 */
class PageTitleProvider extends AbstractPageTitleProvider
{

    /**
     * Sets the page title, based on TYPO3 9's own PageTitleProvider mechanism
     * @param string $title
     */
    public function setTitle(string $title): void
    {
        $this->title = $title;
    }
}
