import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';

const CoronaryAngiographyPage = () => {
    return (
        <PageLayout currentPage="services">
            <section className="hero">
                <div className="container">
                    <div className="fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <Link to="/services" style={{ color: 'var(--brand-red)', textDecoration: 'none', marginBottom: '15px', display: 'inline-block' }}>
                            ← Back to Services
                        </Link>
                        <span className="hero-label">Procedural Service</span>
                        <h2 className="hero-title" style={{ fontSize: '2.5rem' }}>Coronary Angiography</h2>
                        <p className="hero-subtitle">Also known as cardiac catheterisation or coronary arteriography</p>
                    </div>
                </div>
            </section>

            <section style={{ padding: '60px 0', background: 'var(--bg-white)' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                        <div className="fade-in" style={{ marginBottom: '50px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>
                                What is Coronary Angiography?
                            </h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                Coronary angiography is a specialised imaging procedure that allows doctors to see how well your coronary arteries—the arteries supplying blood to your heart—are functioning. This procedure helps detect blockages or narrowing of the arteries that could lead to heart problems such as chest pain or a heart attack.
                            </p>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                This procedure is minimally invasive and provides doctors crucial information to determine if treatments like stents or bypass surgery are necessary.
                            </p>
                        </div>

                        <div className="fade-in" style={{ marginBottom: '50px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>
                                When is it Done?
                            </h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '15px' }}>
                                It is done for various reasons, including:
                            </p>
                            <ul style={{ fontSize: '1.05rem', lineHeight: '1.8', paddingLeft: '30px', color: 'var(--text-main)' }}>
                                <li style={{ marginBottom: '10px' }}>Assessing chest pain due to suspected artery narrowing</li>
                                <li style={{ marginBottom: '10px' }}>Evaluating the need for angioplasty or bypass surgery</li>
                                <li style={{ marginBottom: '10px' }}>Following a failed stress test</li>
                                <li style={{ marginBottom: '10px' }}>Examining significant narrowing seen in a CT scan</li>
                                <li style={{ marginBottom: '10px' }}>After a heart attack</li>
                                <li style={{ marginBottom: '10px' }}>Before open-heart surgery</li>
                                <li style={{ marginBottom: '10px' }}>To rule out coronary artery disease in conditions like heart failure, cardiomyopathy, arrhythmias, unexplained ECG changes, chest trauma, or before high-risk surgeries and transplants</li>
                            </ul>
                        </div>

                        <div className="fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '50px' }}>
                            <div style={{ padding: '25px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                <h4 style={{ color: 'var(--brand-navy)', marginBottom: '10px' }}>⏱️ Duration</h4>
                                <p>30 minutes or less (typical)</p>
                            </div>
                            <div style={{ padding: '25px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                <h4 style={{ color: 'var(--brand-navy)', marginBottom: '10px' }}>📋 Preparation</h4>
                                <p>Pre-operative consultation required</p>
                            </div>
                            <div style={{ padding: '25px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                <h4 style={{ color: 'var(--brand-navy)', marginBottom: '10px' }}>🏥 Location</h4>
                                <p>Hospital Catheterisation Laboratory</p>
                            </div>
                            <div style={{ padding: '25px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                <h4 style={{ color: 'var(--brand-navy)', marginBottom: '10px' }}>✅ Recovery</h4>
                                <p>4-6 hours monitoring required</p>
                            </div>
                        </div>

                        <div className="fade-in" style={{ marginBottom: '50px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>
                                Preparing for Your Visit
                            </h3>
                            <ul style={{ fontSize: '1.05rem', lineHeight: '1.9', paddingLeft: '30px', color: 'var(--text-main)' }}>
                                <li style={{ marginBottom: '12px' }}>You will be asked not to have anything to eat or drink for at least six hours prior to the procedure.</li>
                                <li style={{ marginBottom: '12px' }}>You will usually need to complete admission forms that will be given/sent to you, or available on the hospital's website.</li>
                                <li style={{ marginBottom: '12px' }}>Once you arrive in the hospital, you will be greeted by the hospital staff and then given a bed. You may be asked to remove any jewellery that you might be wearing and to put on a hospital gown.</li>
                                <li style={{ marginBottom: '12px' }}>You will be shaved in the area where the catheter will be inserted. An intravenous (iv) line will be inserted to administer IV fluids/medications as needed.</li>
                            </ul>
                        </div>

                        <div className="fade-in" style={{ marginBottom: '50px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>
                                During the Procedure
                            </h3>
                            <ul style={{ fontSize: '1.05rem', lineHeight: '1.9', paddingLeft: '30px', color: 'var(--text-main)' }}>
                                <li style={{ marginBottom: '12px' }}>To help you relax, you will receive mild sedation through an intravenous drip.</li>
                                <li style={{ marginBottom: '12px' }}>A sheath will be inserted into the artery, through which various catheters will be introduced and advanced to reach your heart.</li>
                                <li style={{ marginBottom: '12px' }}>Traditionally, the right groin has been used to insert the sheath in the femoral artery; however, currently, the majority of procedures are being performed through a small hole in the right wrist, which is also more convenient for the patient.</li>
                                <li style={{ marginBottom: '12px' }}>A special dye will be injected into your blood vessels, making them visible to X-rays. You might feel a hot sensation when the dye is injected although not common, but it usually lasts only 20 to 30 seconds.</li>
                                <li style={{ marginBottom: '12px' }}>Coronary angiography is usually performed under local anaesthesia, meaning that the area where the catheter is inserted will be numbed. You may also receive a sedative to help you relax.</li>
                            </ul>
                        </div>

                        <div className="fade-in" style={{ marginBottom: '50px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>
                                After the Procedure
                            </h3>
                            <ul style={{ fontSize: '1.05rem', lineHeight: '1.9', paddingLeft: '30px', color: 'var(--text-main)' }}>
                                <li style={{ marginBottom: '12px' }}>After the procedure, the catheters and sheath are removed, and pressure is applied to the insertion site.</li>
                                <li style={{ marginBottom: '12px' }}>You will then be moved to a recovery area, where you will rest in bed for at least four hours.</li>
                                <li style={{ marginBottom: '12px' }}>Depending on the results, most people are able to go home after four to six hours, but some may need to stay longer for further monitoring.</li>
                                <li style={{ marginBottom: '12px' }}>You won't be allowed to drive for 24 hours after the procedure.</li>
                                <li style={{ marginBottom: '12px' }}>Following the completeness of the procedure, images from the arteries are ready for assessment and interpretation. Subsequently, based on the severity of potential blockage of arteries, your cardiologist will decide on different modalities of treatment, including medical therapy, stenting, or if needed, to refer you to a cardiac surgeon.</li>
                            </ul>
                        </div>

                        <div className="fade-in" style={{ marginBottom: '50px', padding: '30px', background: 'var(--brand-red-light)', borderRadius: 'var(--radius-md)' }}>
                            <h4 style={{ color: 'var(--brand-navy)', marginBottom: '15px' }}>Risks</h4>
                            <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                                In general, this is a very safe procedure; however, like all procedures, there are some risks. The risks include, but are not limited to, bruising where the tubes are inserted, damage of the vessel where the tubes are inserted, bleeding, stroke, damage to the coronary artery (perhaps causing a heart attack), arrhythmia, allergic reaction to the contrast (dye used), and effects on the kidney. The average complication risk is less than 1 in 1000 for serious complications.
                            </p>
                            <p style={{ fontSize: '1rem', lineHeight: '1.7', marginTop: '15px' }}>
                                As with any procedure, the benefits of the procedure must outweigh the risks. Your cardiologist will discuss with you.
                            </p>
                        </div>

                        <div className="fade-in" style={{ marginBottom: '30px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>
                                Costs
                            </h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                                Your cardiologist will discuss any costs that you may face. The cardiologist will inform you of any "out-of-pocket" fees, and they will advise you if an anaesthetist is involved (the anaesthetist will then inform you of any additional costs). Please note that any excess is a cost raised by the health fund/hospital and not the cardiologist. Please contact the hospital or your health insurer (if applicable) to see if there are any other costs (eg pathology/radiology).
                            </p>
                        </div>

                        <div className="fade-in" style={{ marginTop: '60px', textAlign: 'center', padding: '40px', background: 'var(--brand-navy)', borderRadius: 'var(--radius-lg)' }}>
                            <h3 style={{ color: 'var(--bg-white)', marginBottom: '20px' }}>Need to Schedule an Angiography?</h3>
                            <p style={{ color: 'var(--bg-white)', opacity: '0.9', marginBottom: '30px' }}>
                                Contact our team for consultation and scheduling.
                            </p>
                            <Link to="/contact" className="btn btn-primary">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default CoronaryAngiographyPage;
