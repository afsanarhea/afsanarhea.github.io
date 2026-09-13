const research = {
  title: "Burn Severity Mapping of Kazakhstan Wildfires",
  description:
    "Research internship at the Artificial Intelligence and Robotics Laboratory, Al-Farabi Kazakh National University (May - June 2026). Measuring how much forest two Kazakhstan wildfires destroyed using satellite data instead of ground survey, and building models that estimate that damage automatically.",
  builtWith: ["Python", "Google Earth Engine", "Sentinel-2", "scikit-learn", "XGBoost", "LightGBM", "SHAP", "QGIS"],
  whatIDid: [
    "Mapped burn severity for the 2023 Semey Ormany and 2020 Karkaraly fires using Sentinel-2 imagery and dNBR analysis in Google Earth Engine",
    "Removed target-derived features and replaced random train-test splits with spatial block cross-validation",
    "Trained Random Forest, XGBoost and LightGBM separately at each site (1,183 and 629 labelled pixels)",
    "Used SHAP to resolve disagreement between the models over which features mattered",
  ],
  results: [
    "Measured 61,497 ha burned in the Semey Ormany fire, close to the official figure",
    "Cross-validated R-squared of 0.903 and 0.835, one score for each site",
    "Red Edge bands identified as the dominant predictors",
    "Severity maps validated against NASA FIRMS active-fire records",
    "Graded Excellent by the research supervisor; reference letter available on request",
  ],
};

const Research = () => {
  return (
    <section id="research" className="py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold text-foreground">Research</h2>
          <div className="mt-10 space-y-8">
            <div className="bg-card border border-border rounded-lg p-6 md:p-8 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-semibold text-foreground mb-4">{research.title}</h3>
              <p className="text-muted-foreground mb-6">{research.description}</p>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-foreground mb-2">Built with:</h4>
                <div className="flex flex-wrap gap-2">
                  {research.builtWith.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-medium text-foreground mb-2">What I did:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {research.whatIDid.map((bullet, index) => (
                    <li key={index}>• {bullet}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-foreground mb-2">Results:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {research.results.map((bullet, index) => (
                    <li key={index}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
