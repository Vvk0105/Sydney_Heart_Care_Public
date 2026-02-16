import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';

const CoronaryAngioplastyPage = () => {
    return (
        <PageLayout currentPage="services">
            <section className="hero">
                <div className="container">
                    <div className="fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <Link to="/services" style={{ color: 'var(--brand-red)', textDecoration: 'none', marginBottom: '15px', display: 'inline-block' }}>
                            ← Back to Services
                        </Link>
                        <span className="hero-label">Procedural Service</span>
                        <h2 className="hero-title" style={{ fontSize: '2.5rem' }}>Coronary Angioplasty</h2>
                        <p className="hero-subtitle">Also known as percutaneous coronary intervention (PCI) or balloon angioplasty</p>
                    </div>
                </div>
            </section>

            <section style={{ padding: '60px 0', background: 'var(--bg-white)' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                        <div className="fade-in" style={{ marginBottom: '50px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>
                                What is Coronary Angioplasty?
                            </h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                Coronary angioplasty is a minimally invasive procedure used to open narrowed or blocked coronary arteries, which supply blood to the heart. This treatment improves blood flow and helps relieve symptoms like chest pain (angina) and prevents heart attacks.
                            </p>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                During coronary angioplasty, a thin tube called a catheter, with a small balloon at its tip, is inserted into a blood vessel in your wrist or groin. The catheter is guided to the blocked artery in your heart. Once in place, the balloon is inflated, pressing plaque against the artery wall to create more space for blood flow.
                            </p>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                In most cases, a stent—a small metal mesh—is then placed to keep the artery open after the balloon is deflated and removed. The stent acts as a scaffold, helping to maintain proper blood flow to the heart.
                            </p>
                        </div>

                        <div className="fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '50px' }}>
                            <div style={{ padding: '25px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                <h4 style={{ color: 'var(--brand-navy)', marginBottom: '10px' }}>⏱️ Duration</h4>
                                <p>30 minutes - 2 hours</p>
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
                                <p>Speak to your specialist</p>
                            </div>
                        </div>

                        <div className="fade-in" style={{ marginBottom: '50px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>
                                The Procedure
                            </h3>
                            <ul style={{ fontSize: '1.05rem', lineHeight: '1.9', paddingLeft: '30px', color: 'var(--text-main)' }}>
                                <li style={{ marginBottom: '12px' }}>You will be taken to the Cath Lab and asked to lie on a narrow table, which can be moved in all directions during the test.</li>
                                <li style={{ marginBottom: '12px' }}>You will be connected to a few monitoring devices and then the shaved parts (either your wrist, groin or both) will be cleaned and sterilised with a special solution (which may feel cold). After that your whole body will be covered with sterile drapes.</li>
                                <li style={{ marginBottom: '12px' }}>To help you relax, you will receive mild sedation through an intravenous drip. A sheath will be inserted into the artery where various catheters, wires and instruments will be inserted to reach the heart.</li>
                                <li style={{ marginBottom: '12px' }}>Different catheters / wires / balloons and stents are used as needed to unblock the arteries as required.</li>
                                <li style={{ marginBottom: '12px' }}>There is an X-Ray camera that moves around and records short movie clips of what the interventional cardiologist is doing inside your heart.</li>
                                <li style={{ marginBottom: '12px' }}>Most people do not feel any pain or sensation during the procedure. There are no nerves inside your arteries, so you will not feel the movement of catheters or wires through your body. Some people have nausea or chest discomfort when the dye is injected, or when the balloon is inflated (for the balloon angioplasty), but this does not last long.</li>
                                <li style={{ marginBottom: '12px' }}>When a narrowing which needs to be treated is identified, an extremely thin wire is then passed through this narrowing to lie beyond this area.</li>
                                <li style={{ marginBottom: '12px' }}>On this wire a special collapsed balloon is then advanced and placed accurately within the narrowing. The balloon is then inflated causing the narrowed part to become wider. The balloon is then deflated and withdrawn but the wire stays.</li>
                                <li style={{ marginBottom: '12px' }}>This is usually followed by advancing another special collapsed balloon, which has a metal stent on it. The stent is a metal mesh, which can expand to a predetermined size as the balloon is inflated. Again this is placed within the narrowed part and the balloon is inflated.</li>
                                <li style={{ marginBottom: '12px' }}>The stent expands and widens the artery. The balloon is then deflated and withdrawn leaving the stent embedded inside the artery. Once the stent placement is deployed, the stent cannot be moved again. Deployment is seen, confirmed and documented via the X-Ray clips recorded intermittently throughout the procedure.</li>
                                <li style={{ marginBottom: '12px' }}>If there are more blockages, the same procedure is repeated to insert additional stents if needed. If there are many blockages, then the procedure will have to be repeated after a few days / weeks as the total dose of dye used and radiation involved can be too much for one sitting.</li>
                                <li style={{ marginBottom: '12px' }}>Coronary angioplasty is usually done under local anaesthesia to numb the area where the catheter is inserted. You may also receive mild sedation to help you relax, but general anaesthesia is not typically required.</li>
                            </ul>
                        </div>

                        <div className="fade-in" style={{ marginTop: '60px', textAlign: 'center', padding: '40px', background: 'var(--brand-navy)', borderRadius: 'var(--radius-lg)' }}>
                            <h3 style={{ color: 'var(--bg-white)', marginBottom: '20px' }}>Need to Discuss Angioplasty?</h3>
                            <p style={{ color: 'var(--bg-white)', opacity: '0.9', marginBottom: '30px' }}>
                                Contact our team for consultation and detailed information.
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

export default CoronaryAngioplastyPage;
