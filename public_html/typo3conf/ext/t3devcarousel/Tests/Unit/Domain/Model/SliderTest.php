<?php

namespace T3Dev\T3devcarousel\Tests\Unit\Domain\Model;

/***************************************************************
 *  Copyright notice
 *
 *  (c) 2016 Dmitry Vasiliev <vaaraha@gmail.com>, T3Studio
 *
 *  All rights reserved
 *
 *  This script is part of the TYPO3 project. The TYPO3 project is
 *  free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  The GNU General Public License can be found at
 *  http://www.gnu.org/copyleft/gpl.html.
 *
 *  This script is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  This copyright notice MUST APPEAR in all copies of the script!
 ***************************************************************/

/**
 * Test case for class \T3Dev\T3devcarousel\Domain\Model\Slider.
 *
 * @copyright Copyright belongs to the respective authors
 * @license http://www.gnu.org/licenses/gpl.html GNU General Public License, version 3 or later
 *
 * @author Dmitry Vasiliev <vaaraha@gmail.com>
 */
class SliderTest extends \TYPO3\CMS\Core\Tests\UnitTestCase
{
	/**
	 * @var \T3Dev\T3devcarousel\Domain\Model\Slider
	 */
	protected $subject = NULL;

	public function setUp()
	{
		$this->subject = new \T3Dev\T3devcarousel\Domain\Model\Slider();
	}

	public function tearDown()
	{
		unset($this->subject);
	}

	/**
	 * @test
	 */
	public function getItemReturnsInitialValueForItem()
	{
		$newObjectStorage = new \TYPO3\CMS\Extbase\Persistence\ObjectStorage();
		$this->assertEquals(
			$newObjectStorage,
			$this->subject->getItem()
		);
	}

	/**
	 * @test
	 */
	public function setItemForObjectStorageContainingItemSetsItem()
	{
		$item = new \T3Dev\T3devcarousel\Domain\Model\Item();
		$objectStorageHoldingExactlyOneItem = new \TYPO3\CMS\Extbase\Persistence\ObjectStorage();
		$objectStorageHoldingExactlyOneItem->attach($item);
		$this->subject->setItem($objectStorageHoldingExactlyOneItem);

		$this->assertAttributeEquals(
			$objectStorageHoldingExactlyOneItem,
			'item',
			$this->subject
		);
	}

	/**
	 * @test
	 */
	public function addItemToObjectStorageHoldingItem()
	{
		$item = new \T3Dev\T3devcarousel\Domain\Model\Item();
		$itemObjectStorageMock = $this->getMock('TYPO3\\CMS\\Extbase\\Persistence\\ObjectStorage', array('attach'), array(), '', FALSE);
		$itemObjectStorageMock->expects($this->once())->method('attach')->with($this->equalTo($item));
		$this->inject($this->subject, 'item', $itemObjectStorageMock);

		$this->subject->addItem($item);
	}

	/**
	 * @test
	 */
	public function removeItemFromObjectStorageHoldingItem()
	{
		$item = new \T3Dev\T3devcarousel\Domain\Model\Item();
		$itemObjectStorageMock = $this->getMock('TYPO3\\CMS\\Extbase\\Persistence\\ObjectStorage', array('detach'), array(), '', FALSE);
		$itemObjectStorageMock->expects($this->once())->method('detach')->with($this->equalTo($item));
		$this->inject($this->subject, 'item', $itemObjectStorageMock);

		$this->subject->removeItem($item);

	}
}
