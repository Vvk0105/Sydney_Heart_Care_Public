import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';

const EchocardiogramPage = () => {
    return (
        <PageLayout currentPage="services">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <div className="fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <Link to="/services" style={{ color: 'var(--brand-red)', textDecoration: 'none', marginBottom: '15px', display: 'inline-block' }}>
                            ← Back to Services
                        </Link>
                        <span className="hero-label">Diagnostic Service</span>
                        <h2 className="hero-title" style={{ fontSize: '2.5rem' }}>Echocardiogram</h2>
                        <p className="hero-subtitle">
                            Also known as an echo or transthoracic echocardiogram (TTE)
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section style={{ padding: '60px 0', background: 'var(--bg-white)' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                        {/* What is */}
                        <div className="fade-in" style={{ marginBottom: '50px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>
                                What is an Echocardiogram?
                            </h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                An echocardiogram is a type of ultrasound that looks at your heart, similar to how an ultrasound is used during pregnancy to check on a baby's health.
                            </p>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                This common and completely safe test helps your doctor see your heart beating and pumping blood. It's very helpful in checking for any issues with the size, structure, or function of your heart, including its chambers, muscle, and valves.
                            </p>
                        </div>

                        {/* What it checks */}
                        <div className="fade-in" style={{ marginBottom: '50px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>
                                What an Echocardiogram Can Detect
                            </h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '15px' }}>
                                An Echocardiogram uses inaudible sound waves which travel through the tissues to create moving images of the heart and its various structures. It can help your doctor with the following:
                            </p>
                            <ul style={{ fontSize: '1.05rem', lineHeight: '1.8', paddingLeft: '30px', color: 'var(--text-main)' }}>
                                <li style={{ marginBottom: '10px' }}>Measure the size of the heart's chambers to ensure they are normal.</li>
                                <li style={{ marginBottom: '10px' }}>Assess how well the heart is pumping blood and how each chamber is functioning.</li>
                                <li style={{ marginBottom: '10px' }}>Check for signs of back pressure into the lungs, which can indicate heart problems.</li>
                                <li style={{ marginBottom: '10px' }}>Evaluate heart murmurs, which are unusual sounds that could suggest valve issues.</li>
                                <li style={{ marginBottom: '10px' }}>Study the heart valves to check for conditions like leaking (regurgitation) or narrowing (stenosis).</li>
                                <li style={{ marginBottom: '10px' }}>Look for holes or other structural issues in the heart, such as thickening of the heart muscle caused by high blood pressure.</li>
                                <li style={{ marginBottom: '10px' }}>Measure pressures inside the heart chambers to get an overall sense of heart function.</li>
                                <li style={{ marginBottom: '10px' }}>Detect any other abnormalities or conditions that might need attention.</li>
                            </ul>
                        </div>

                        {/* Limitations */}
                        <div className="fade-in" style={{ marginBottom: '50px', padding: '30px', background: 'var(--brand-red-light)', borderRadius: 'var(--radius-md)' }}>
                            <h4 style={{ color: 'var(--brand-navy)', marginBottom: '15px' }}>Limitations of Echo Test</h4>
                            <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                                Please note inherent limitations of 2D echo test such as obesity, underlying lung disease, technical artifacts, blood flow calculation & doppler errors, interobserver variability, conditions like hypertrophic cardiomyopathy with localized thickening, heart failure with preserved ejection fraction, certain cardiomyopathies, certain type of congenital heart disease such as small PFO, ASD, coarctation of aorta, small masses or tumors.
                            </p>
                        </div>

                        {/* Quick Info Grid */}
                        <div className="fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '50px' }}>
                            <div style={{ padding: '25px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                <h4 style={{ color: 'var(--brand-navy)', marginBottom: '10px' }}>⏱️ Duration</h4>
                                <p>Under 40 minutes</p>
                            </div>
                            <div style={{ padding: '25px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                <h4 style={{ color: 'var(--brand-navy)', marginBottom: '10px' }}>📋 Preparation</h4>
                                <p>Booking required</p>
                            </div>
                            <div style={{ padding: '25px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                <h4 style={{ color: 'var(--brand-navy)', marginBottom: '10px' }}>📊 Results</h4>
                                <p>10 business days to referring doctor</p>
                            </div>
                            <div style={{ padding: '25px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                <h4 style={{ color: 'var(--brand-navy)', marginBottom: '10px' }}>✅ Post-procedure</h4>
                                <p>Non-invasive, no requirements</p>
                            </div>
                        </div>

                        {/* Preparing for your visit */}
                        <div className="fade-in" style={{ marginBottom: '50px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>
                                Preparing for Your Visit
                            </h3>
                            <ul style={{ fontSize: '1.05rem', lineHeight: '1.9', paddingLeft: '30px', color: 'var(--text-main)' }}>
                                <li style={{ marginBottom: '12px' }}>A team member will guide you to a preparation room.</li>
                                <li style={{ marginBottom: '12px' }}>Please note that the patients will be required to remove their shirt above the waist for the procedure and you will be provided with a disposable gown. While we make every effort to maintain patient comfort and privacy, female patients may be asked to remove their bra during the scan if necessary. This is to avoid interference with the ultrasound imaging and to ensure optimal contact of the probe with the skin for accurate imaging of the heart.</li>
                                <li style={{ marginBottom: '12px' }}>You will be asked to lie on the bed on your left side.</li>
                                <li style={{ marginBottom: '12px' }}>For preparation, your skin will be cleaned with alcohol wipes and gently abraded with skin prep tape.</li>
                                <li style={{ marginBottom: '12px' }}>Gel will be used to help the ultrasound waves get to your heart and may feel cold when first applied.</li>
                                <li style={{ marginBottom: '12px' }}>Three electrodes are usually attached to your body for ECG recording while ultrasound images are being taken.</li>
                                <li style={{ marginBottom: '12px' }}>The probe is placed on various areas of the chest and neck, and images are obtained. These are moving images of the heart and some "Doppler" images which produce audible sound that you can hear during the test.</li>
                                <li style={{ marginBottom: '12px' }}>Various positions can be used by the technologist to obtain better images, and he/she may ask you to hold your breath at times to record a moving clip.</li>
                                <li style={{ marginBottom: '12px' }}>After the test the gel is wiped off, ECG electrodes are removed, and you will be allowed to dress up and go.</li>
                                <li style={{ marginBottom: '12px' }}>At this stage a Cardiologist will have look at the images and will let you know about the result. If the result is abnormal, he may call and inform your referring doctor as well.</li>
                            </ul>
                        </div>

                        {/* Important Notes */}
                        <div className="fade-in" style={{ marginBottom: '30px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>
                                Important Notes
                            </h3>
                            <ul style={{ fontSize: '1.05rem', lineHeight: '1.9', paddingLeft: '30px', color: 'var(--text-main)' }}>
                                <li style={{ marginBottom: '12px' }}>There is no need to fast, but we recommend avoiding a big meal before the test as it may cause discomfort while lying down and possibly affect heart function slightly from digestion.</li>
                                <li style={{ marginBottom: '12px' }}>Avoid wearing lotions or oils as they can interfere with electrode adhesion.</li>
                                <li style={{ marginBottom: '12px' }}>Avoid caffeine or stimulants for a few hours before the test as they can affect heart rhythm.</li>
                                <li style={{ marginBottom: '12px' }}>Consult your doctor about the medications prior to taking the test.</li>
                                <li style={{ marginBottom: '12px' }}>Please let the staff know if you have had any allergic reactions to the electrode adhesives previously.</li>
                            </ul>
                        </div>

                        {/* CTA Section */}
                        <div className="fade-in" style={{ marginTop: '60px', textAlign: 'center', padding: '40px', background: 'var(--brand-navy)', borderRadius: 'var(--radius-lg)' }}>
                            <h3 style={{ color: 'var(--bg-white)', marginBottom: '20px' }}>Ready to Book Your Echocardiogram?</h3>
                            <p style={{ color: 'var(--bg-white)', opacity: '0.9', marginBottom: '30px' }}>
                                Bookings are required for this test. Our team is here to help.
                            </p>
                            <Link to="/book" className="btn btn-primary">
                                Book Appointment
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default EchocardiogramPage;
