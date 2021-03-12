/**
 * Copyright 2021 Google LLC
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

export interface StorageFolder {
  type: 'folder';
  name: string;
  fullPath: string;
}

export interface StorageFile {
  name: string;
  type: 'file';
  size: number;
  updated: string;
  contentType: string;
  uploading?: boolean;
  timeCreated: string;
  fullPath: string;
}

export type StorageItem = StorageFile | StorageFolder;

export interface StorageRouterParams {
  bucket: string;
  path: string;
}
