export const initialData = [
    {
      id: 4,
      category_title: 'WIP',
      heading: 'Work In Progress',
      metrics: [
        {
          meta: {
            link: 'total_open_job_cards',
            viz: 'bar',
            filters: []
          },
          body: {
            name: 'Total Open Job Cards',
            subtitle: 'Live',
            description: ''
          }
        }
      ]
    },
    {
      id: 1,
      category_title: 'Performance',
      heading: 'Performance',
      metrics: [
        {
          meta: {
            link: 'total_open_claims',
            viz: 'bar',
            filters: []
          },
          body: {
            name: 'Total Open Claims',
            subtitle: 'Live',
            description: 'The current number of open claims'
          }
        },
        {
          meta: {
            link: 'appointments_made',
            viz: 'bar',
            filters: []
          },
          body: {
            name: 'Appointments Made',
            subtitle: 'Current Day',
            description: 'The number of appointments blah blah'
          }
        }
      ]
    },
    {
      id: 2,
      category_title: 'Operational',
      heading: 'operational',
      metrics: [
        {
          meta: {
            link: 'appointments_made',
            viz: 'bar',
            filters: []
          },
          body: {
            name: 'Appointments Made',
            subtitle: 'Current Day',
            description: 'The number of appointments blah blah'
          }
        }
      ]
    }
  ];
  