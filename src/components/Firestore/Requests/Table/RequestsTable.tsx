/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import './RequestsTable.scss';

import {
  DataTable,
  DataTableBody,
  DataTableContent,
  DataTableHead,
  DataTableHeadCell,
  DataTableRow,
} from '@rmwc/data-table';
import React from 'react';

import { FirestoreRulesEvaluation } from '../rules_evaluation_result_model';
import RequestsTableRow from './RequestsTableRow';
import RequestsZeroState from './RequestsZeroState';

export interface Props {
  filteredRequests: FirestoreRulesEvaluation[] | undefined;
  shouldShowTable: boolean;
  shouldShowZeroState: boolean;
  setShowCopyNotification: (value: boolean) => void;
}

const RequestsTable: React.FC<Props> = ({
  filteredRequests,
  shouldShowTable,
  shouldShowZeroState,
  setShowCopyNotification,
}) => (
  <>
    <DataTable
      className={
        shouldShowTable
          ? 'Firestore-Requests-Table'
          : 'Firestore-Requests-Table Firestore-Requests-Table--Empty'
      }
    >
      <DataTableContent>
        <DataTableHead>
          <DataTableRow>
            <DataTableHeadCell className="Firestore-Requests-Table-Outcome-Header"></DataTableHeadCell>
            <DataTableHeadCell className="Firestore-Requests-Table-Method-Header">
              Method
            </DataTableHeadCell>
            <DataTableHeadCell className="Firestore-Requests-Table-Path-Header">
              Path
            </DataTableHeadCell>
            <DataTableHeadCell>Date</DataTableHeadCell>
          </DataTableRow>
        </DataTableHead>
        <DataTableBody>
          {shouldShowTable &&
            filteredRequests?.map((request: FirestoreRulesEvaluation) => {
              const { requestId } = request;
              return (
                <RequestsTableRow
                  key={requestId}
                  requestId={requestId}
                  request={request}
                  setShowCopyNotification={setShowCopyNotification}
                />
              );
            })}
        </DataTableBody>
      </DataTableContent>
    </DataTable>
    {shouldShowZeroState && <RequestsZeroState />}
  </>
);

export default RequestsTable;