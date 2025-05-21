import React from 'react';

export default function Services() {
  return (
    <section>
      <h1>Our Services</h1>
      <ul>
        <li>Driveway and Sidewalk Cleaning</li>
        <li>Deck and Patio Cleaning</li>
      </ul>
      <p>Contact us for a free estimate today!</p>

      <h2>Before & After</h2>
      <div className="before-after">
        {/* Section 1: Brick Cleaning */}
        <div className="image-pair">
          <h3>Before</h3>
          <img src="/beforebrick.jepg" alt="Before Brick cleaning" />
        </div>
        <div className="image-pair">
          <h3>After</h3>
          <img src="/beforebrick.jepg" alt="After Brick cleaning" />
        </div>

        {/* Section 2: Concrete Cleaning */}
        <div className="image-pair">
          <h3>Before</h3>
          <img src="/beforeconcrete.jepg" alt="Before Concrete cleaning" />
        </div>
        <div className="image-pair">
          <h3>After</h3>
          <img src="/beforeconcrete.jepg" alt="After Concrete cleaning" />
        </div>

        {/* Section 3: Wall Cleaning */}
        <div className="image-pair">
          <h3>Before</h3>
          <img src="/beforewall.jepg" alt="Before Wall cleaning" />
        </div>
        <div className="image-pair">
          <h3>After</h3>
          <img src="/beforewall.jepg" alt="After Wall cleaning" />
        </div>
      </div>
    </section>
  );
}
