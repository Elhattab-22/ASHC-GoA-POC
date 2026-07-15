// components/common/HousingAccordions.tsx
import { GoabAccordion } from "@abgov/react-components";

export default function HousingAccordions() {
  return (
    <>
      <GoabAccordion heading="What questions will I be asked?">
        <p>
          You will be asked about your housing needs, household size and
          location.
        </p>
      </GoabAccordion>

      <GoabAccordion heading="When I finish the questions, what will I see?">
        <p>You will see sample housing options that may match your answers.</p>
      </GoabAccordion>

      <GoabAccordion heading="How long is the wait for housing?">
        <p>
          Wait times depend on location, housing type and current availability.
        </p>
      </GoabAccordion>
    </>
  );
}
