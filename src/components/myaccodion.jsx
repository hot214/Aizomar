import {
    Accordion,
    AccordionHeader,
    AccordionBody
} from "@material-tailwind/react";
import { Fragment, useState } from "react";

function Icon({ id, open, child }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`${id === open || id === child ? "rotate-180" : ""
                } h-5 w-5 transition-transform text-gray-300`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
    );
}

export default function MyAccordion() {
    const [open, setOpen] = useState(0);
    const [openChild, setOpenChild] = useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    const handleopenChild = (value) => {
        setOpenChild(openChild === value ? 0 : value);
    }
    return (
        <div className="w-full text-gray-400 mr-0 text-left bg-white">
            <Accordion open={open === 1} >
                <AccordionHeader onClick={() => handleOpen(1)}>
                    <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="/" className="text-sm">Home</a></div>
                </AccordionHeader>
            </Accordion>
            <Accordion open={open === 2} icon={<Icon id={2} open={open}/>}>
                <AccordionHeader onClick={() => handleOpen(2)}>
                    <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><span href="" className="text-sm">About</span></div>
                </AccordionHeader>
                <AccordionBody>
                    <div className="pl-5 text-gray-400 bg-white">
                        <Accordion open={open === 21} >
                            <AccordionHeader>
                                <div className="w-full my-3 hover:text-green-300 transition duration-200"><a href="/about" className="text-sm">About Us</a></div>
                            </AccordionHeader>
                        </Accordion>
                        <Accordion open={open === 22} >
                            <AccordionHeader>
                                <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="/about/mission-vision" className="text-sm">Mission & Vision</a></div>
                            </AccordionHeader>
                        </Accordion>
                        <Accordion open={open === 23} >
                            <AccordionHeader>
                                <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="/about/awards" className="text-sm">Awards</a></div>
                            </AccordionHeader>
                        </Accordion>
                    </div>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)}>
                    <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><span className="text-sm">Forensic Solutions</span></div>
                </AccordionHeader>
                <AccordionBody>
                    <div className={`pl-5 text-gray-400 bg-white ${open === 3 ? "" : "hidden"}`}>
                        <Accordion open={openChild === 31} icon={<Icon id={31} child={openChild} />}>
                            <AccordionHeader onClick={() => handleopenChild(31)}>
                                <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200">
                                    <span className="text-sm">Inspection</span>
                                </div>
                            </AccordionHeader>
                            <AccordionBody>
                                <div className="pl-5 text-gray-400 bg-white">
                                    <Accordion open={open === 311}>
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Portable X-ray Systems</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 312} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Cell Phone Detection</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 313} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Imagining Cameras</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 314} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Imagining Scanners</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                </div>
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={openChild === 32} icon={<Icon id={32} child={openChild} />}>
                            <AccordionHeader onClick={() => handleopenChild(32)}>
                                <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200">
                                    <span className="text-sm">Mobile Forensics</span>
                                </div>
                            </AccordionHeader>
                            <AccordionBody>
                                <div className="pl-5 text-gray-400 bg-white">
                                    <Accordion open={open === 321}>
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Decoding and Review</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 322} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Cell site analysis</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 323} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Extraction</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 324} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Analytics</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                </div>
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={openChild === 33} icon={<Icon id={33} child={openChild} />}>
                            <AccordionHeader onClick={() => handleopenChild(33)}>
                                <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200">
                                    <span className="text-sm">Video & Photo Forensics</span>
                                </div>
                            </AccordionHeader>
                            <AccordionBody>
                                <div className="pl-5 text-gray-40 bg-white">
                                    <Accordion open={open === 331}>
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">VideoEnhancement Software</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 332} >
                                        <AccordionHeader onClick={() => handleOpen(332)}>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Image Authentication</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 333} >
                                        <AccordionHeader onClick={() => handleOpen(333)}>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Video Synopsis</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                </div>
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={openChild === 34} icon={<Icon id={34} child={openChild} />}>
                            <AccordionHeader onClick={() => handleopenChild(34)}>
                                <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200">
                                    <span className="text-sm">Network Forensics</span>
                                </div>
                            </AccordionHeader>
                            <AccordionBody>
                                <div className="pl-5 text-gray-400 bg-white">
                                    <Accordion open={open === 341}>
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Network Forensic Toolkit</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 342} >
                                        <AccordionHeader onClick={() => handleOpen(342)}>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Wireless-Detective</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 343} >
                                        <AccordionHeader onClick={() => handleOpen(343)}>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">VoIP Detective</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                </div>
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={openChild === 35} icon={<Icon id={35} child={openChild} />}>
                            <AccordionHeader onClick={() => handleopenChild(35)}>
                                <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200">
                                    <span className="text-sm">Crime Scene Reconstruction</span>
                                </div>
                            </AccordionHeader>
                            <AccordionBody>
                                <div className="pl-5 text-gray-400 bg-white">
                                    <Accordion open={open === 351}>
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">3D Reconstruction</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 352}>
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Photographie</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                </div>
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={openChild === 36} icon={<Icon id={36} child={openChild} />}>
                            <AccordionHeader onClick={() => handleopenChild(36)}>
                                <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200">
                                    <span className="text-sm">Shoeprint Collection</span>
                                </div>
                            </AccordionHeader>
                            <AccordionBody>
                                <div className="pl-5 text-gray-400 bg-white">
                                    <Accordion open={open === 361}>
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Advanced Document Verification</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 362} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Information Reference Systems</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 363} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Express Document Verification</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 364} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Passport Reader</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                </div>
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={openChild === 37} icon={<Icon id={37} child={openChild} />}>
                            <AccordionHeader onClick={() => handleopenChild(37)}>
                                <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200">
                                    <span className="text-sm">Firearms</span>
                                </div>
                            </AccordionHeader>
                            <AccordionBody>
                                <div className="pl-5 text-gray-400 bg-white">
                                    <Accordion open={open === 371}>
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Digital Forensic Laboratory</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 372} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Forensic Portable Device</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 373} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Forensic DVR Recovery</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 374} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Forensic Workstation</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 375} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Forensic Software</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 376} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Forensic Server</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                </div>
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={openChild === 38} icon={<Icon id={38} child={openChild} />}>
                            <AccordionHeader onClick={() => handleopenChild(38)}>
                                <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200">
                                    <span className="text-sm">Audio Forensics</span>
                                </div>
                            </AccordionHeader>
                            <AccordionBody>
                                <div className="pl-5 text-gray-400 bg-white">
                                    <Accordion open={open === 381}>
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Voice recognition-Commercial</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 382} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Noise Cancellation Systems</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 383} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Forensic Analysis Tools</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 384} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Lanuage Solution</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 385} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Voice Biometric</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                </div>
                            </AccordionBody>
                        </Accordion>
                    </div>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 4} >
                <AccordionHeader onClick={() => handleOpen(4)}>
                    <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="/digital-forensics" className="text-sm">Digital Forensics</a></div>
                </AccordionHeader>
            </Accordion>
            <Accordion open={open === 5} icon={<Icon id={5} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(5)}>
                    <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><span href="" className="text-sm">Projects</span></div>
                </AccordionHeader>
                <AccordionBody>
                    <div className="pl-5 text-gray-400 bg-white">
                        <Accordion open={open === 47} >
                            <AccordionHeader>
                                <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="/projects/abu-dhabi-ballastic" className="text-sm">Abu Dhabi Ballistic Lab</a></div>
                            </AccordionHeader>
                        </Accordion>
                        <Accordion open={open === 48} >
                            <AccordionHeader>
                                <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="/projects/shabiya-police-station" className="text-sm">Shabiya Police Station</a></div>
                            </AccordionHeader>
                        </Accordion>
                        <Accordion open={open === 49} >
                            <AccordionHeader>
                                <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="/projects/alian-forensic-lab" className="text-sm">Al Ain Forensic Lab</a></div>
                            </AccordionHeader>
                        </Accordion>
                        <Accordion open={open === 50} >
                            <AccordionHeader>
                                <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="/projects/rop-ballistic-lab" className="text-sm">Rop Ballistic Lab</a></div>
                            </AccordionHeader>
                        </Accordion>
                        <Accordion open={open === 51} >
                            <AccordionHeader>
                                <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="/projects/qatar-hospital" className="text-sm">Qatar Hospital</a></div>
                            </AccordionHeader>
                        </Accordion>
                        <Accordion open={open === 52} >
                            <AccordionHeader>
                                <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="/projects/qatar-university" className="text-sm">QATAR University</a></div>
                            </AccordionHeader>
                        </Accordion>
                        <Accordion open={open === 53} >
                            <AccordionHeader>
                                <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="/projects/mobile-cip-labs" className="text-sm">Mobile CIP Lab</a></div>
                            </AccordionHeader>
                        </Accordion>
                        <Accordion open={open === 54} >
                            <AccordionHeader>
                                <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="/projects/mobile-ballistic-laboratory" className="text-sm">Mobile Ballistic Laboratory</a></div>
                            </AccordionHeader>
                        </Accordion>
                        <Accordion open={open === 55} >
                            <AccordionHeader>
                                <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Qatar Police Forensic Lab</a></div>
                            </AccordionHeader>
                        </Accordion>
                    </div>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 6} icon={<Icon id={6} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(6)}>
                    <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><span className="text-sm">Services</span></div>
                </AccordionHeader>
                <AccordionBody>
                    <div className="pl-5 text-gray-400 bg-white">
                        <Accordion open={openChild === 56} icon={<Icon id={56} child={openChild} />}>
                            <AccordionHeader onClick={() => handleopenChild(56)}>
                                <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200">
                                    <span className="text-sm">Forensic IT Services</span>
                                </div>
                            </AccordionHeader>
                            <AccordionBody>
                                <div className="pl-5 text-gray-400 bg-white">
                                    <Accordion open={open === 561}>
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Digital Forensics Laboratory</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 562} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Mobile Data Extraction</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 563} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Data Recovery</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 564} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Password Recovery</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 565} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Data Acquisition</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 566} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Malware Detection</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 567} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Networking</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                </div>
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={openChild === 57} icon={<Icon id={57} child={openChild} />}>
                            <AccordionHeader onClick={() => handleopenChild(57)}>
                                <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200">
                                    <span className="text-sm">Security System Solution</span>
                                </div>
                            </AccordionHeader>
                            <AccordionBody>
                                <div className="pl-5 text-gray-400 bg-white">
                                    <Accordion open={open === 571}>
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">CCTV Surveillance Systems</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 572} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Access Control Systems</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 573} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Fingerprint Reader</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                </div>
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={openChild === 58} icon={<Icon id={58} child={openChild} />}>
                            <AccordionHeader onClick={() => handleopenChild(58)}>
                                <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200">
                                    <span className="text-sm">3D Laser Scanning</span>
                                </div>
                            </AccordionHeader>
                            <AccordionBody>
                                <div className="pl-5 text-gray-400 bg-white">
                                    <Accordion open={open === 581}>
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Non-Contact Inspection</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 582} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">As-Built Documentation</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 583} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Forensic Analysis and Investigation</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 584} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Fire Investigation</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 585} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">360 Degree Live Streaming</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                </div>
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={openChild === 59} icon={<Icon id={59} child={openChild} />}>
                            <AccordionHeader onClick={() => handleopenChild(59)}>
                                <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200">
                                    <span className="text-sm">High Speed Imaging</span>
                                </div>
                            </AccordionHeader>
                            <AccordionBody>
                                <div className="pl-5 text-gray-400 bg-white">
                                    <Accordion open={open === 591}>
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Materials Testing</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 592} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Fluid Dynamics</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 593} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Ballistics, Impact Physics & Detonics</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 594} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Combustion</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 595} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Automotive Crash Testing</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                </div>
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={openChild === 60} icon={<Icon id={60} child={openChild} />}>
                            <AccordionHeader onClick={() => handleopenChild(60)}>
                                <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200">
                                    <span className="text-sm">Laboratory Design</span>
                                </div>
                            </AccordionHeader>
                            <AccordionBody>
                                <div className="pl-5 text-gray-400 bg-white">
                                    <Accordion open={open === 601}>
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Laboratory Design & Construction</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 602}>
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Supply and Install Laboratory Furniture</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 603}>
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Laboratory Maintenance</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 604}>
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Laboratory Renovation</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                </div>
                            </AccordionBody>
                        </Accordion>
                        <Accordion open={openChild === 61} icon={<Icon id={61} child={openChild} />}>
                            <AccordionHeader onClick={() => handleopenChild(61)}>
                                <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200">
                                    <span className="text-sm">ID Card & Passport Scanning</span>
                                </div>
                            </AccordionHeader>
                            <AccordionBody>
                                <div className="pl-5 text-gray-400 bg-white">
                                    <Accordion open={open === 611}>
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Supplying and maintaining passport scanning</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                    <Accordion open={open === 612} >
                                        <AccordionHeader>
                                            <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="#" className="text-sm">Passport reading for Hotels, Airlines, Car Rental, Clubs and etc.</a></div>
                                        </AccordionHeader>
                                    </Accordion>
                                </div>
                            </AccordionBody>
                        </Accordion>
                    </div>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 7} >
                <AccordionHeader onClick={() => handleOpen(7)}>
                    <div className="bg-white w-full my-3 hover:text-green-300 transition duration-200"><a href="/contact-us" className="text-sm">Contact Us</a></div>
                </AccordionHeader>
            </Accordion>
        </div>
    )
}