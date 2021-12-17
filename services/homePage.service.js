import React from 'react';
import HomePageQuery from './queries/homepageQuery'
import { ExecuteQueryService } from './executeQuery.service'
const HomePageService = (language) => {

  return ExecuteQueryService(HomePageQuery(language));

}

export default HomePageService;