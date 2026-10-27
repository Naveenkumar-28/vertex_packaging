import React, { useEffect } from 'react'
import CheckboxRow from './CheckBoxRow';
import * as Accordion from "@radix-ui/react-accordion";
import { FilterItem } from './AccordionParts';

const FILTER_APPLICATIONS = ["Coffee", "Tea", "Dry Fruits", "Snacks", "Pet Food", "Pharma", "Confectionery", "Beverages", "Personal Care", "Frozen Food"];

const FILTER_MATERIALS = ["PET / PE", "PET / MET PET / PE", "BOPP / PE", "PET / AL Foil / PE", "PET / NYLON / PE", "Kraft"];

const FILTER_FEATURES = ["Zip Lock", "Window", "Matte Finish", "Gloss Finish", "Spout"];

function ProductsFilterSidebar({ resetFilters, setApps, apps, feats, mats, setMats, setFeats }) {

    const toggleArr = (arr, setter, value) => {
        setter(
            arr.includes(value)
                ? arr.filter((item) => item !== value)
                : [...arr, value]
        );
    };

    return (
        <aside
            className="glass p-5 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto z-10"
            data-testid="products-sidebar"
            id='products-sidebar'

        >
            <h3 className="display text-base font-bold mb-4">Filters </h3>

            <Accordion.Root type="multiple" className="w-full" defaultValue={["application", "material", "features"]}>
                <FilterItem value="application" title="Application" testid="filter-application">
                    {FILTER_APPLICATIONS.map((application) => (
                        <CheckboxRow
                            key={application}
                            label={application}
                            checked={apps.includes(application)}
                            onChange={() => toggleArr(apps, setApps, application)}
                            testid={`app-${application.toLowerCase().replace(/\s+/g, "-")}`}
                        />
                    ))}
                </FilterItem>

                <FilterItem value="material" title="Material" testid="filter-material">
                    {FILTER_MATERIALS.map((material) => (
                        <CheckboxRow
                            key={material}
                            label={material}
                            checked={mats.includes(material)}
                            onChange={() => toggleArr(mats, setMats, material)}
                            testid={`mat-${material.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                        />
                    ))}
                </FilterItem>

                <FilterItem value="features" title="Features" testid="filter-feature">
                    {FILTER_FEATURES.map((feature) => (
                        <CheckboxRow
                            key={feature}
                            label={feature}
                            checked={feats.includes(feature)}
                            onChange={() => toggleArr(feats, setFeats, feature)}
                            testid={`feat-${feature.toLowerCase().replace(/\s+/g, "-")}`}
                        />
                    ))}
                </FilterItem>
            </Accordion.Root>

            <button
                onClick={resetFilters}
                data-testid="filters-reset"
                className="text-xs text-white/50 hover:text-primary mt-4 block"
            >
                Reset all filters
            </button>
        </aside>
    )
}

export default ProductsFilterSidebar