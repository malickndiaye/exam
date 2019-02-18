/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */


import User from '../api/account-management/user/user.model';
import config from './environment';
import Country from '../api/admin/country/country.model';
//import Category from '../api/worklearning/category/category.model';
//import Program from '../api/worklearning/program/program.model';
//import Cohort from '../api/worklearning/cohort/cohort.model';
//import CohortExecution from '../api/worklearning/cohort/execution.model';
//import Phase from '../api/worklearning/cohort/phase.model';
console.log('passo', config.DEFAULT_PASSWORD);
// clean users and create a new admin
let admin = new User({
  firstname: 'admin',
  lastname: 'admin',
  name: 'admin admin',
  email: 'admin2@edacy.com',
  password: config.DEFAULT_PASSWORD,
  role: 'admin',
  active: true,
  created: Date.now()
});

User.find({})
  .then(() => {
    admin.save();
  });

// clean countries and create 3 countries

let senegal = new Country({
  name: 'Senegalold',
  code: 'SNd',
  creator: admin,
  created: Date.now()
});
Country.find({})
  .then(() => {
    Country.create({
      name: 'Ivory COASdT',
      code: 'CId',
      creator: admin,
      created: Date.now()
    },
    {
      name: 'Nigeriaé',
      code: 'NGé',
      creator: admin,
      created: Date.now()
    });
  })
  .then(() => {
    senegal.save();
  });

// lets create a new country director
let country_director = null;
User.remove({email: 'countrydirector2@edacy.com'})
  .then(() => {
    country_director = new User({
      firstname: 'country',
      lastname: 'director',
      name: 'country director',
      email: 'countrydirector2@edacy.com',
      password: config.DEFAULT_PASSWORD,
      role: 'country_manager',
      active: true,
      country: senegal,
      created: Date.now()
    });
    country_director.save();
  });
/*.then(() => {
    // lets create categories
    let softLeadership = new Category({
      name: 'soft leadership',
      desciption: 'bla bla car',
      creator: country_director,
      created: Date.now()
    });

    let digital = new Category({
      name: 'digital leadership',
      desciption: 'bla bla car',
      creator: country_director,
      created: Date.now()
    });

    Category.find({}).remove()
      .then(() => {
        softLeadership.save()
          .then(() => {
            digital.save();
          });
      });

    // lets create programs
    let backend = new Program({
      name: 'backend',
      description: 'bla bla car',
      status: 'published',
      category: softLeadership,
      creator: country_director,
      created: Date.now()
    });

    let frontend = new Program({
      name: 'frontend',
      description: 'bla bla car',
      status: 'published',
      category: softLeadership,
      creator: country_director,
      created: Date.now()
    });

    let datascience = new Program({
      name: 'datascience',
      description: 'bla bla car',
      status: 'published',
      category: softLeadership,
      creator: country_director,
      created: Date.now()
    });
    //cohort
    let cohort = null;
    let cohortExecution = null;
    let phases = [];
    let preparation = null;
    let specialisation = null;
    let worklearning = null;
    Program.find({}).remove()
      .then(() => {
        backend.save()
          .then(() => {
            frontend.save()
              .then(() => {
                datascience.save();
              });
          });
      })
      .then(() => {
        Cohort.find({}).remove()
          .then(() => {
            cohort = new Cohort({
              description: 'bla bla car',
              status: 'published',
              location: senegal,
              creator: country_director,
              created: Date.now()
            });
            cohort.generateMatricule(senegal, 0);
            cohort.save();
            return cohort;
          })
          .then(() => {
            CohortExecution.find({}).remove()
              .then(() => {
                cohortExecution = CohortExecution({
                  cohort_id: cohort,
                  program_id: backend,
                  startDate: '2018-04-03',
                  endDate: '2019-04-03',
                  startDateProgram: '2018-05-28',
                  registration: {
                    startDate: '2018-04-03',
                    endDate: '2018-06-03'
                  }
                });
                cohortExecution.save();
                return cohortExecution;
              });
          })
          .then(() => {
            Phase.find({}).remove()
              .then(() => {
                preparation = new Phase({
                  name: 'preparation',
                  status: 'opened',
                  startDate: null,
                  endDate: null
                });
                specialisation = new Phase({
                  name: 'specialisation',
                  status: 'in_progress',
                  startDate: null,
                  endDate: null
                });
                worklearning = new Phase({
                  name: 'WorkLearning',
                  status: 'opened',
                  startDate: null,
                  endDate: null
                });
                phases.push(preparation, specialisation, worklearning);
                preparation.save();
                specialisation.save();
                worklearning.save();
              })
              .then(() => {
                cohortExecution.phases_id = phases;
                cohortExecution.save();
              });
          });
      });
  });
*/
