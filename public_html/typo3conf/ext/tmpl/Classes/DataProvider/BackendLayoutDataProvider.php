<?php
namespace T3Dev\Tmpl\DataProvider;

/* *************************************************************
 * Copyright Informatioen
 * *************************************************************
 */
use TYPO3\CMS\Backend\View\BackendLayout\BackendLayout;
use TYPO3\CMS\Backend\View\BackendLayout\BackendLayoutCollection;
use TYPO3\CMS\Backend\View\BackendLayout\DataProviderContext;
use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;
use TYPO3\CMS\Backend\View\BackendLayout\DataProviderInterface;

/**
 * Backend Layout Data Provider
 */
class BackendLayoutDataProvider implements DataProviderInterface {

    /**
     * Extension key
     * @var string
     */
    protected $extKey = 'tmpl';

    /**
     * Default Backend Layouts
     * @var array
     */
    protected $backendLayouts = array();

    /**
     * Path with default backend layouts
     * @var string
     */
    protected $backendLayoutPath = 'BackendLayouts';

    /**
     * Contructor
     */
    public function __construct() {

        // Get folders from backendlayout path
        $backendLayoutAbsPath = GeneralUtility::getFileAbsFileName('EXT:' . $this->extKey . '/' . $this->backendLayoutPath);
        $backendLayoutDirs = GeneralUtility::get_dirs($backendLayoutAbsPath);

        if (empty($backendLayoutDirs) || (is_string($backendLayoutDirs) && !strcmp($backendLayoutDirs, 'error')))
            return false;

        foreach ($backendLayoutDirs as $backendLayoutDir) {

            // dirs with a leading _ are deactivated
            if (substr($backendLayoutDir, 0, 1) == '_') {
                continue;
            }

            $backendLayout = array();

            $locallangPath = 'LLL:EXT:' . $this->extKey . '/' . $this->backendLayoutPath . '/' . $backendLayoutDir . '/locallang.xlf';

            // Read config from file
            $configFile = ExtensionManagementUtility::extPath($this->extKey, $this->backendLayoutPath . '/' . $backendLayoutDir . '/setup.ts');
            if (!is_file($configFile)) continue;
            $config = GeneralUtility::getUrl($configFile);

            // Replace locallang marker
            $config = str_replace('###LOCAL_LANG###', $locallangPath, $config);

            // Build backend layout array
            $backendLayout['title']  = $locallangPath . ':title';
            $backendLayout['icon']   = 'EXT:' . $this->extKey . '/' .$this->backendLayoutPath . '/' . $backendLayoutDir . '/ce_wiz.svg';
            $backendLayout['config'] = $config;

            $this->backendLayouts[$backendLayoutDir] = $backendLayout;
        }
    }

    /**
     * @param DataProviderContext $dataProviderContext
     * @param BackendLayoutCollection $backendLayoutCollection
     * @return void
     */
    public function addBackendLayouts(DataProviderContext $dataProviderContext, BackendLayoutCollection $backendLayoutCollection) {

        foreach ($this->backendLayouts as $key => $data) {

            $data['uid'] = $key;
            $backendLayout = $this->createBackendLayout($data);
            $backendLayoutCollection->add($backendLayout);
        }
    }

    /**
     * Gets a backend layout by (regular) identifier.
     *
     * @param string $identifier
     * @param integer $pageId
     * @return NULL|BackendLayout
     */
    public function getBackendLayout($identifier, $pageId) {

        $backendLayout = NULL;

        if (array_key_exists($identifier, $this->backendLayouts)) {
            return $this->createBackendLayout($this->backendLayouts[$identifier]);
        }

        return $backendLayout;
    }

    /**
     * Creates a new backend layout using the given record data.
     *
     * @param array $data
     * @return BackendLayout
     */
    protected function createBackendLayout(array $data) {

        $backendLayout = BackendLayout::create($data['uid'], $data['title'], $data['config']);
        $backendLayout->setIconPath($this->getIconPath($data['icon']));
        $backendLayout->setData($data);

        return $backendLayout;
    }

    /**
     * Gets and sanitizes the icon path.
     *
     * @param string $icon Name of the icon file
     * @return string
     */
    protected function getIconPath($icon) {
        $iconPath = '';

        if (!empty($icon)) {
            $iconPath = $icon;
        }

        return $iconPath;
    }
}
