import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../../components/PageLayout';

const StressEchoPage = () => {
    return (
        <PageLayout currentPage="services">
            <section className="hero">
                <div className="container">
                    <div className="fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <Link to="/services" style={{ color: 'var(--brand-red)', textDecoration: 'none', marginBottom: '15px', display: 'inline-block' }}>
                            ← Back to Services
                        </Link>
                        <span className="hero-label">Diagnostic Service</span>
                        <h2 className="hero-title" style={{ fontSize: '2.5rem' }}>Stress Echocardiogram</h2>
                        <p className="hero-subtitle">Also known as a stress echo</p>
                    </div>
                </div>
            </section>

            <section style={{ padding: '60px 0', background: 'var(--bg-white)' }}>
                <div className="container">
                    <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                        <div className="fade-in" style={{ marginBottom: '50px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>
                                What is a Stress Echocardiogram?
                            </h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                Stress Echocardiogram is a test to assess heart function under physical stress. It uses ultrasound waves (inaudible sound waves) to image the heart and assess its function before and immediately after the exercise to see how the heart muscle pump is working, and sometimes to measure other parameters.
                            </p>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                This test is done to see if there is reduced blood supply to any portion of the heart which could indicate narrowing or blockages in the coronary arteries. When certain areas of the heart muscle don't receive enough blood during stress, it may signal underlying heart disease, such as coronary artery disease. However, this test can also be used for other reasons, including evaluating valve function under stress, measuring pressure changes within the heart, and in some cases, for licensing or regulatory purposes. Overall, the test serves a broad range of diagnostic needs to ensure optimal heart health.
                            </p>
                        </div>

                        <div className="fade-in" style={{ marginBottom: '50px', padding: '30px', background: 'var(--brand-red-light)', borderRadius: 'var(--radius-md)' }}>
                            <h4 style={{ color: 'var(--brand-navy)', marginBottom: '15px' }}>Limitations of Stress Echo</h4>
                            <p style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                                Please note overall sensitivity of the test is slightly less, particularly for the detection of single-vessel coronary disease such as left circumflex artery. A discordant result that can occur because a stress echo has limitations in detecting smaller or less significant blockages that a CTCA can identify. Body habitus, respiratory movement, drop in post exercise heart rate and other variables (submaximal stress, rapid recovery, balanced ischemia, LVH, Diabetes, small heart chambers and hyperdynamic LV) can affect test results and accuracy. In general this modality sensitivity is 88% and specificity is 75%.
                            </p>
                        </div>

                        <div className="fade-in" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '50px' }}>
                            <div style={{ padding: '25px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                <h4 style={{ color: 'var(--brand-navy)', marginBottom: '10px' }}>⏱️ Duration</h4>
                                <p>20-30 minutes</p>
                            </div>
                            <div style={{ padding: '25px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                <h4 style={{ color: 'var(--brand-navy)', marginBottom: '10px' }}>📋 Preparation</h4>
                                <p>Booking required</p>
                            </div>
                            <div style={{ padding: '25px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                <h4 style={{ color: 'var(--brand-navy)', marginBottom: '10px' }}>📊 Results</h4>
                                <p>10 days to referring doctor</p>
                            </div>
                            <div style={{ padding: '25px', background: 'var(--bg-light)', borderRadius: 'var(--radius-md)', borderLeft: '4px solid var(--brand-red)' }}>
                                <h4 style={{ color: 'var(--brand-navy)', marginBottom: '10px' }}>✅ Post-procedure</h4>
                                <p>Non-invasive, no requirements</p>
                            </div>
                        </div>

                        <div className="fade-in" style={{ marginBottom: '50px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>Preparing for Your Visit</h3>
                            <ul style={{ fontSize: '1.05rem', lineHeight: '1.9', paddingLeft: '30px', color: 'var(--text-main)' }}>
                                <li style={{ marginBottom: '12px' }}>Avoid a big meal before the test as it may cause discomfort while running on the treadmill and possibly affect heart function slightly from digestion.</li>
                                <li style={{ marginBottom: '12px' }}>Avoid wearing lotions or oils as they can interfere with electrode adhesion.</li>
                                <li style={{ marginBottom: '12px' }}>Avoid caffeine or stimulants for a few hours before the test as they can affect heart rhythm.</li>
                                <li style={{ marginBottom: '12px' }}>Avoid certain medications before the test as advised by your doctor. Consult your doctor about stopping the medications prior to taking the test.</li>
                                <li style={{ marginBottom: '12px' }}>Please let the staff know if you have had any allergic reactions to the electrode adhesives previously.</li>
                                <li style={{ marginBottom: '12px' }}>Wear clothes and footwear that are comfortable for exercise. Ensure that the top is separate and can be easily removed.</li>
                            </ul>
                        </div>

                        <div className="fade-in" style={{ marginBottom: '50px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>During the Test</h3>
                            <ul style={{ fontSize: '1.05rem', lineHeight: '1.9', paddingLeft: '30px', color: 'var(--text-main)' }}>
                                <li style={{ marginBottom: '12px' }}>For preparation, your skin will be cleaned with alcohol wipes and gently abraded with skin prep tape.</li>
                                <li style={{ marginBottom: '12px' }}>Please note that the patients will be required to remove their shirt above the waist for the procedure and you will be provided with a disposable gown. Female patients may be asked to remove their bra as it can interfere with the ultrasound imaging.</li>
                                <li style={{ marginBottom: '12px' }}>For preparation, some hair may need to be shaved off to improve the electrical signals.</li>
                                <li style={{ marginBottom: '12px' }}>Electrodes are placed on your chest with a sticky, but easy-to-remove, adhesive.</li>
                                <li style={{ marginBottom: '12px' }}>After the ECG electrodes have been placed on the chest, your blood pressure will be checked, and you will be guided into the stress test room by a technician, where you may find one other health professional – a qualified doctor to supervise the test.</li>
                                <li style={{ marginBottom: '12px' }}>Gel will be used to help the ultrasound waves get to your heart and may feel cold when applied.</li>
                                <li style={{ marginBottom: '12px' }}>You will be asked to lie down on your left side with your left arm out. Some resting heart images will be taken, and the ultrasound probe (transducer) will be held against your chest in various areas.</li>
                                <li style={{ marginBottom: '12px' }}>ECG electrodes are connected to the ECG monitor with the help of lead wires (seen as a continuous ECG graph on the computer screen) and you will be asked to get on to the treadmill or exercise bike. The treadmill starts very slow at a speed of 2.7 km/hr and an incline of 10 degrees and will go faster and higher every few minutes depending on the protocol being used. The idea is to get your heart rate faster to its maximum which is determined by age and fitness level. Most people can exercise between 5 to 12 minutes.</li>
                                <li style={{ marginBottom: '12px' }}>The treadmill or the bike is stopped when you tell the staff to stop due to any reason (either you are fatigued and tired or you have chest pain or significant shortness of breath). The treadmill/bike is also stopped by the doctor for other reasons.</li>
                                <li style={{ marginBottom: '12px' }}>Then you will be asked to come off the treadmill/bike and lie down. The technician will scan your heart and take stress images with the same ultrasound probe. Sometimes you may be asked to hold your breath during a certain phase of the breathing cycle.</li>
                                <li style={{ marginBottom: '12px' }}>Feeling a little bit dizzy after the test is normal. Shortness of breath proportional to the exercise performed is also normal. However, disproportional shortness of breath and any chest pain / discomfort or palpitations etc is abnormal and should be reported to the doctor present during the test. Any drop in blood pressure is also abnormal.</li>
                            </ul>
                        </div>

                        <div className="fade-in" style={{ marginBottom: '30px' }}>
                            <h3 style={{ color: 'var(--brand-navy)', marginBottom: '20px', fontSize: '1.8rem' }}>Understanding Your Results</h3>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8', marginBottom: '15px' }}>
                                A normal test will most often mean that you were able to exercise as long as or longer than most people of your age and gender. You also did not have symptoms or concerning changes in blood pressure and/or your ECG. Your heart pictures show that all parts of your heart respond to increased stress by pumping harder. A normal result means that blood flow through the coronary arteries is probably normal.
                            </p>
                            <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
                                Abnormal results (called positive results) may be due to reduced blood flow to a part of the heart. The most likely cause is a narrowing or blockage of the artery supplying blood to that part of your heart muscle. There are several other reasons why the test might be positive, which are beyond the scope of this introduction. Please discuss this with your referring physician as the overall interpretation of your test results depends on the reason for the test, your age, your history and other medical problems.
                            </p>
                        </div>

                        <div className="fade-in" style={{ marginTop: '60px', textAlign: 'center', padding: '40px', background: 'var(--brand-navy)', borderRadius: 'var(--radius-lg)' }}>
                            <h3 style={{ color: 'var(--bg-white)', marginBottom: '20px' }}>Ready to Book Your Stress Echo?</h3>
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

export default StressEchoPage;
