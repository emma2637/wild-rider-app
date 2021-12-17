import React from 'react';
import LayoutQuery from './queries/layoutQuery'
import { ExecuteQueryService } from './executeQuery.service'
const LayoutComponentService = (language) => {

  let query = LayoutQuery(language);
  return ExecuteQueryService(query);
}

export default LayoutComponentService;