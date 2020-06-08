<?php
namespace T3Dev\Tmpl\Hooks;

/*
 * This file is part of the TYPO3 CMS extension fluid_styled_content.
 *
 * It is free software; you can redistribute it and/or modify it under
 * the terms of the GNU General Public License, either version 2
 * of the License, or any later version.
 *
 * For the full copyright and license information, please read the
 * LICENSE.txt file that was distributed with this source code.
 *
 * The TYPO3 project - inspiring people to share!
 */

use TYPO3\CMS\Backend\View\PageLayoutViewDrawItemHookInterface;
use TYPO3\CMS\Backend\View\PageLayoutView;

/**
 * Contains a preview rendering for the page module of CType="ce_slider"
 */
class ImagePreviewRenderer implements PageLayoutViewDrawItemHookInterface
{
    /**
     * Preprocesses the preview rendering of a content element of type "ce_slider"
     *
     * @param \TYPO3\CMS\Backend\View\PageLayoutView $parentObject Calling parent object
     * @param bool $drawItem Whether to draw the item using the default functionality
     * @param string $headerContent Header content
     * @param string $itemContent Item content
     * @param array $row Record row of tt_content
     * @return void
     */
    public function preProcess(
        PageLayoutView &$parentObject,
        &$drawItem,
        &$headerContent,
        &$itemContent,
        array &$row
    ) { 
    	if ($row['CType'] === 'ce_img_enlarge') {
    		$itemContent .= '<h5>Image enlarge</h5>';
    		if ($row['image']) {
    			$itemContent .= $parentObject->thumbCode($row, 'tt_content', 'image') . '<br />';
    		}
    		$drawItem = false;
    	}
        
    }
}
