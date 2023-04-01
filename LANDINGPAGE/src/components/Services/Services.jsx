import "./Services.scss";

const Services = () => {
  const ServiceList = [
    {
      id: 1,

      heading: "Track company-wide progress",
      body: "See how your day-to-day tasks fit inti the wider vision.Go from tracling progress at the milestone level all the way down to the smallest of details. Never lose sight of thr bigeer picture again ",
    },
    {
      id: 2,

      heading: "Advance built-in reports",
      body: "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed",
    },

    {
      id: 3,

      heading: "Everything you need in one place",
      body: "Stop jumping from one service to another to communicate, store files, track tasks and share documents.Manage offers an all-inone team productivity solution.",
    },
  ];
  return (
    <>
      <div className="services">
        <div className="services-text">
          <h1>What's different about Manage?</h1>
          <p>
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        <div className="services-list">
          {ServiceList.map((service) => {
            return (
              <div className="list" key={service.id}>
                <div className="number">
                  <span>0{service.id}</span>
                </div>

                <div className="text">
                  <h2>
                    <span className="numbermobile">0{service.id}</span>
                    {service.heading}
                  </h2>
                  <p>{service.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
