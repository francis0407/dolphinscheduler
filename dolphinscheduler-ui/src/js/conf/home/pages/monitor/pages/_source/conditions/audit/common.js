/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import i18n from '@/module/i18n'

/**
 * Module code table
 */
const moduleType = [
  {
    code: '',
    label: `${i18n.$t('AuditType')}`
  }, {
    code: 'USER_MODULE',
    label: `${i18n.$t('UserAudit')}`
  }, {
    code: 'PROJECT_MODULE',
    label: `${i18n.$t('ProjectAudit')}`
  }
]

/**
 * Operation code table
 */
const operationType = [
  {
    code: '',
    label: `${i18n.$t('AllOperations')}`
  }, {
    code: 'CREATE_USER',
    label: `${i18n.$t('Create User')}`
  }, {
    code: 'CREATE_PROJECT',
    label: `${i18n.$t('Create Project')}`
  }
]

export {
  moduleType, operationType
}
