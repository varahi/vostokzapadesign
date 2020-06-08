<?php
namespace T3Dev\T3devcarousel\Controller;

use TYPO3\CMS\Core\Database\ConnectionPool;
use TYPO3\CMS\Core\Utility\GeneralUtility;

 /**
 * AbstractController
 */
 abstract class AbstractController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController {

     protected function findUidsByPid($pageId) {

         $connection = GeneralUtility::makeInstance(ConnectionPool::class)
             ->getConnectionForTable('tt_content');

         /** @var  \TYPO3\CMS\Core\Database\Query\QueryBuilder $queryBuilder */
         $queryBuilder = $connection->createQueryBuilder();
         $result = $queryBuilder
             ->select('tt_content.uid')
             ->from('tt_content')
             ->from('pages')
             ->where(
                 $queryBuilder->expr()->like(
                     'CType',
                     $queryBuilder->createNamedParameter('%' . $queryBuilder->escapeLikeWildcards('t3devcarousel_t3devcarousel') . '%')
                 ),
                 $queryBuilder->expr()->eq('pages.uid', $pageId)
             )
             ->execute();

         $uidsArr = [];
         while ($row = $result->fetch()) {
             $uidsArr[] = $row['uid'];
         }

         return $uidsArr;

     }

     protected function _findUidsByPid_old($pageId) {
         $sysLanguageUid = $GLOBALS['TSFE']->sys_language_uid;

         $where = "pages.uid = $pageId
                AND pages.uid = tt_content.pid AND pages.deleted = 0 AND pages.hidden = 0 
                AND tt_content.deleted = 0 AND tt_content.hidden = 0 
                AND CType like '%t3devcarousel_t3devcarousel%' 
                AND sys_language_uid = $sysLanguageUid ";

         $query = $GLOBALS['TYPO3_DB']->SELECTquery('tt_content.uid', 'tt_content, pages', $where);
         $res = $GLOBALS['TYPO3_DB']->sql_query($query);
         $uidsArr = [];
         if ($res)
             while ($uidRow = $GLOBALS['TYPO3_DB']->sql_fetch_assoc($res)) {
            $uidsArr[] = $uidRow['uid'];
         }

         $GLOBALS['TYPO3_DB']->sql_free_result($res);
         //$uids = implode(" ',' ", $uidsArr);
         //\TYPO3\CMS\Core\Utility\DebugUtility::debug($uidsArr);
         return $uidsArr;
     }

     protected function countUidsByPid($pageId) {
         $sysLanguageUid = $GLOBALS['TSFE']->sys_language_uid;

         $where = "pages.uid = $pageId
                AND pages.uid = tt_content.pid AND pages.deleted = 0 AND pages.hidden = 0 
                AND tt_content.deleted = 0 AND tt_content.hidden = 0 
                AND CType like '%t3devcarousel_t3devcarousel%' 
                AND sys_language_uid = $sysLanguageUid ";

         $query = $GLOBALS['TYPO3_DB']->SELECTquery('tt_content.uid', 'tt_content, pages', $where);
         $res = $GLOBALS['TYPO3_DB']->sql_query($query);
         $count = $GLOBALS['TYPO3_DB']->sql_num_rows($res);

         $GLOBALS['TYPO3_DB']->sql_free_result($res);
         return $count;
     }

 }
