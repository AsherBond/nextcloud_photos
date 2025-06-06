<?php

declare(strict_types=1);
/**
 * SPDX-FileCopyrightText: 2025 Nextcloud GmbH and Nextcloud contributors
 * SPDX-License-Identifier: AGPL-3.0-or-later
 */

namespace OCA\Photos\Filters;

use OC\Files\Search\SearchBinaryOperator;
use OC\Files\Search\SearchComparison;
use OCA\Photos\Listener\OriginalDateTimeMetadataProvider;
use OCP\Files\Search\ISearchBinaryOperator;
use OCP\Files\Search\ISearchComparison;
use OCP\FilesMetadata\IMetadataQuery;

class DateRangeFilter implements IFilter {
	public const ID = 'date-range';

	public function getId(): string {
		return self::ID;
	}

	public function getSearchOperator(array $filterValue): ISearchBinaryOperator {
		$operators = [];

		if (is_int($filterValue['start'])) {
			$operators[] = new SearchComparison(
				ISearchComparison::COMPARE_GREATER_THAN,
				OriginalDateTimeMetadataProvider::METADATA_KEY,
				$filterValue['start'] / 1000,
				IMetadataQuery::EXTRA,
			);
		}

		if (is_int($filterValue['end'])) {
			$operators[] = new SearchComparison(
				ISearchComparison::COMPARE_LESS_THAN,
				OriginalDateTimeMetadataProvider::METADATA_KEY,
				$filterValue['end'] / 1000 + 24 * 60 * 60,
				IMetadataQuery::EXTRA,
			);
		}

		return new SearchBinaryOperator(ISearchBinaryOperator::OPERATOR_AND, $operators);
	}
}
