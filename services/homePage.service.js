import {ApolloClient, InMemoryCache,gql,} from '@apollo/client';
const apiDefaultUrl = 'https://wild-rider-strapi.herokuapp.com/graphql';

export const client = new ApolloClient({
    uri: apiDefaultUrl,
    cache: new InMemoryCache()
});
function HomePageService(language) {

    // const apiUrl = `${apiDefaultUrl}&language=${language}`;
    const data = client.query({
        query: gql`
            query {
                homepages(locale: "${language}") {
                    headers{
                      menuoptions{
                        displayname 
                        img{url}
                        menuoptionchilds{
                          displayname
                          path
                        }
                      }
                      languages {
                        displayname
                        code
                      }
                      logopath {url}
                    }
                    carssliders{
                      carsliderinfos{
                        title
                        desc
                        img{url}
                        rating
                      }
                      tripadvisors{
                        logopath {url}
                        desc
                        url
                      }
                    }
                      ourservices {
                    title
                      services{
                        img{url}
                        title
                        desc
                      }
                    }      
                    thustworthycarrentals{
                      title
                      thrustworthycarrentalinfos{
                          img{url}
                        title
                        shortdesc
                        longdesc
                      }
                    }
                    clientsliders{
                      title
                      clientopinions{
                          profileimagepath {url}
                        comment
                        name
                        rate
                      }      
                    }
                    faqs{
                      title
                      desc
                      faqoptions{
                        title
                        desc
                      }
                    }
                    otexperts{
                      title
                      teamimagepath{url}
                      otexpertsinfos{
                        img {url}
                        desc
                      }
                    }
                    footers{
                      desc
                    }
                    buttons{
                      type
                      text
                    }
                  }    
            }
        `
    });

    return data;
}

export default client;