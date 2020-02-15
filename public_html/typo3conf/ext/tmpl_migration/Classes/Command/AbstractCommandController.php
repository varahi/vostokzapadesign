<?php

namespace T3Dev\TmplMigration\Command;

use TYPO3\CMS\Core\Utility\GeneralUtility;
use TYPO3\CMS\Extbase\Mvc\Controller\CommandController;
use \TYPO3\CMS\Core\DataHandling\DataHandler;


class AbstractCommandController extends CommandController
{

    const TABLE_migrate = 'tt_content';

    /**
     * @var string
     */
    protected $starttime_formatted = '000-00-00';

    /**
     * @var \TYPO3\CMS\Core\Log\Logger
     */
    protected $logger = null;

    /**
     * @var \TYPO3\CMS\Extbase\Configuration\ConfigurationManagerInterface
     * @inject
     */
    protected $configurationManager;

    /**
     * persistenceManager
     *
     * @var \TYPO3\CMS\Extbase\Persistence\Generic\PersistenceManager
     * @inject
     */
    protected $persistenceManager;


    protected function log($level, $message, array $data = [])
    {
        $this->logger->log($level, $message, $data);
    }

    /**
     * Build config array (get from $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf']['vostokzapadesign_site'])
     * if empty then set default values for configuration
     *
     * @return array Configuration
     */
    protected function getConfiguration() {
        if (empty($this->configuration)) {
            $configuration = $GLOBALS['TYPO3_CONF_VARS']['EXT']['extConf']['vostokzapadesign_site'];
            if (is_string($configuration)) {
                $configuration = unserialize($configuration);
            }

            // set default values if no global conf found
            if (empty($configuration)) {
                $configuration = array(
                    'enableDevLog' => true,
                );
            }
            $this->configuration = $configuration;
        }
        return $this->configuration;
    }

    /**
     * @return \TYPO3\CMS\Core\Database\DatabaseConnection
     */
    protected function getDatabaseConnection(){
        return $GLOBALS['TYPO3_DB'];
    }


    /**
     * method get some element uids
     *
     * @return void
     */
    protected function getElementUids($elementName) {

        $db = $this->getDatabaseConnection();

        $where = "pages.uid = tt_content.pid
                AND pages.deleted = 0
                AND tt_content.deleted = 0
                AND CType like '%fluidcontent_content%'
                AND tx_fed_fcefile like '%$elementName%' ";
        //AND sys_language_uid = $sysLanguageUid ";

        $query = $db->SELECTquery('tt_content.uid', 'tt_content, pages', $where);
        $res = $db->sql_query($query);

        $uidsArr = [];
        if ($res)
            while ($uidRow = $db->sql_fetch_assoc($res)) {
                $uidsArr[] = $uidRow['uid'];
            }
        $db->sql_free_result($res);
        return $uidsArr;
    }

    /**
     * Count updated items
     *
     * @return int Count of updated items type 'containers'
     */
    protected function countUpdatedItems($containerName)
    {
        $db = $this->getDatabaseConnection();
        // $where = "tt_content.deleted = 0 and tt_content.hidden = 0";
        $where = "tt_content.deleted = 0";
        $where .= " and CType like '%fluidcontent_content%' ";
        $where .= " and tx_fed_fcefile like '%Devcompany.VostokzapadesignSite:$containerName.html%' ";
        $result = $db->exec_SELECTquery('COUNT(*) as cnt', self::TABLE_migrate, $where);
        $count = $db->sql_fetch_assoc($result)['cnt'];

        return $count;
    }


    /**
     * Write message to developers log (if 'enableDevLog' set to true)
     * and write message to file typo3temp/icd10_import_xml.log
     * and write message to stdout if command run in typo3/cli_dispatch.phpsh
     *
     * @param string $msg
     */
    protected function devLog($msg)
    {
        $config = $this->getConfiguration();
        if ($config['enableDevLog']) {
            GeneralUtility::devLog($msg, 'tmpl_migrate');
        }

        $logFile = fopen(PATH_site . "typo3temp/" . $this->starttime_formatted . "_tmpl_migrate.log", "a");
        if ($logFile) {
            $date = date(DATE_RFC822);
            fwrite($logFile, $date . ": ". $msg . "\n");
            fclose($logFile);
        }

        $this->outputLine($msg);
    }

}
