import { Document, DocumentCategory } from '../types';

export const mockDocuments: Document[] = [
  {
    id: '1',
    title: 'Employee Laptop Setup Guide',
    description: 'Step-by-step guide for setting up new employee laptops with required software and security configurations.',
    content: `
      <h2>Employee Laptop Setup Guide</h2>
      <p>This guide provides detailed instructions for IT support staff to set up new employee laptops.</p>
      
      <h3>Initial Setup</h3>
      <ol>
        <li>Unbox the laptop and verify all components are included</li>
        <li>Power on the device and begin the operating system setup</li>
        <li>Create a local administrator account</li>
        <li>Connect to the company Wi-Fi network</li>
      </ol>
      
      <h3>Software Installation</h3>
      <ol>
        <li>Install the company's endpoint protection software</li>
        <li>Install required office productivity software</li>
        <li>Install department-specific software based on employee role</li>
        <li>Configure email client and calendar</li>
      </ol>
      
      <h3>Security Configuration</h3>
      <ol>
        <li>Enable disk encryption</li>
        <li>Configure firewall settings</li>
        <li>Set up VPN access</li>
        <li>Enable automatic updates</li>
      </ol>
      
      <h3>User Account Setup</h3>
      <ol>
        <li>Create standard user account for the employee</li>
        <li>Configure access to necessary network resources</li>
        <li>Set up printer connections</li>
        <li>Verify all applications are working correctly</li>
      </ol>
      
      <h3>Documentation & Handover</h3>
      <ol>
        <li>Record device serial number and asset tag in inventory system</li>
        <li>Document any special configurations or software installed</li>
        <li>Prepare welcome packet with basic usage instructions</li>
        <li>Schedule handover meeting with new employee</li>
      </ol>
    `,
    category: DocumentCategory.Hardware,
    tags: ['laptop', 'setup', 'onboarding'],
    createdBy: '1',
    createdAt: new Date('2024-03-15'),
    updatedAt: new Date('2024-05-20'),
    version: 2,
  },
  {
    id: '2',
    title: 'VPN Access Instructions',
    description: 'Guide for employees to set up and use the company VPN for secure remote access to internal resources.',
    content: `
      <h2>VPN Access Instructions</h2>
      <p>This guide explains how to set up and use the company VPN for secure remote access.</p>
      
      <h3>Installation</h3>
      <ol>
        <li>Download the VPN client from the company portal</li>
        <li>Run the installer and follow the on-screen instructions</li>
        <li>Restart your computer when prompted</li>
      </ol>
      
      <h3>Configuration</h3>
      <ol>
        <li>Open the VPN client application</li>
        <li>Enter the VPN server address: vpn.company.com</li>
        <li>Enter your company email address and network password</li>
        <li>Save the configuration</li>
      </ol>
      
      <h3>Connecting to the VPN</h3>
      <ol>
        <li>Open the VPN client</li>
        <li>Click "Connect"</li>
        <li>Enter your credentials if prompted</li>
        <li>Wait for the connection to be established</li>
      </ol>
      
      <h3>Troubleshooting</h3>
      <ul>
        <li>If you cannot connect, check your internet connection</li>
        <li>Verify that your password has not expired</li>
        <li>Try restarting the VPN client</li>
        <li>Contact IT support if problems persist</li>
      </ul>
      
      <h3>Security Guidelines</h3>
      <ul>
        <li>Always disconnect from the VPN when not in use</li>
        <li>Do not share your VPN credentials with anyone</li>
        <li>Use the VPN whenever connecting to company resources from public networks</li>
        <li>Report any suspicious activity to IT security</li>
      </ul>
    `,
    category: DocumentCategory.Network,
    tags: ['vpn', 'remote access', 'security'],
    createdBy: '2',
    createdAt: new Date('2024-02-10'),
    updatedAt: new Date('2024-04-05'),
    version: 3,
  },
  {
    id: '3',
    title: 'Password Policy',
    description: 'Official company password policy including requirements, expiration rules, and best practices for secure passwords.',
    content: `
      <h2>Company Password Policy</h2>
      <p>This document outlines the official company password policy that all employees must follow.</p>
      
      <h3>Password Requirements</h3>
      <ul>
        <li>Minimum length: 12 characters</li>
        <li>Must include at least one uppercase letter</li>
        <li>Must include at least one lowercase letter</li>
        <li>Must include at least one number</li>
        <li>Must include at least one special character</li>
        <li>Cannot contain your username or parts of your full name</li>
        <li>Cannot be a previously used password</li>
      </ul>
      
      <h3>Password Expiration</h3>
      <ul>
        <li>Passwords expire every 90 days</li>
        <li>You will receive notifications starting 14 days before expiration</li>
        <li>Previously used passwords cannot be reused for at least 1 year</li>
      </ul>
      
      <h3>Multi-Factor Authentication</h3>
      <p>Multi-factor authentication (MFA) is required for all accounts that support it, including:</p>
      <ul>
        <li>Email accounts</li>
        <li>VPN access</li>
        <li>Cloud services</li>
        <li>Administrative accounts</li>
      </ul>
      
      <h3>Password Storage</h3>
      <ul>
        <li>Never write down passwords or store them in unencrypted files</li>
        <li>Use the company-approved password manager</li>
        <li>Do not share passwords with anyone, including IT staff</li>
        <li>Do not use company passwords for personal accounts</li>
      </ul>
      
      <h3>Reporting Security Incidents</h3>
      <p>If you suspect your password has been compromised:</p>
      <ol>
        <li>Change your password immediately</li>
        <li>Notify the IT security team</li>
        <li>Document any unusual activity you observed</li>
      </ol>
    `,
    category: DocumentCategory.Security,
    tags: ['password', 'security', 'policy'],
    createdBy: '1',
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05'),
    version: 1,
  },
  {
    id: '4',
    title: 'Email Troubleshooting Guide',
    description: 'Common email issues and their solutions for the company email system.',
    content: `
      <h2>Email Troubleshooting Guide</h2>
      <p>This guide covers common email issues and their solutions for our company email system.</p>
      
      <h3>Cannot Send or Receive Emails</h3>
      <ol>
        <li>Check your internet connection</li>
        <li>Verify that your email client is online</li>
        <li>Try restarting your email application</li>
        <li>Ensure your password hasn't expired</li>
        <li>Check if you've exceeded your mailbox quota</li>
      </ol>
      
      <h3>Email Synchronization Issues</h3>
      <ol>
        <li>Check sync settings in your email client</li>
        <li>Verify that automatic sync is enabled</li>
        <li>Try manually refreshing your inbox</li>
        <li>Remove and re-add your email account</li>
      </ol>
      
      <h3>Missing Emails</h3>
      <ol>
        <li>Check your spam or junk folder</li>
        <li>Search for the email using keywords</li>
        <li>Check if you have any email filters or rules that might be moving messages</li>
        <li>Verify with the sender that the email was actually sent</li>
      </ol>
      
      <h3>Email Attachment Problems</h3>
      <ol>
        <li>Check if the attachment size exceeds the 25MB limit</li>
        <li>Ensure the file type is not blocked by company policy</li>
        <li>Try saving the attachment to your computer before opening it</li>
        <li>Verify you have the appropriate application to open the attachment</li>
      </ol>
      
      <h3>Calendar and Meeting Issues</h3>
      <ol>
        <li>Ensure calendar sync is enabled</li>
        <li>Check that you're using the correct time zone settings</li>
        <li>Try accepting/declining meeting invitations again</li>
        <li>Check if the meeting organizer has updated or canceled the meeting</li>
      </ol>
    `,
    category: DocumentCategory.Software,
    tags: ['email', 'troubleshooting', 'outlook'],
    createdBy: '2',
    createdAt: new Date('2024-03-20'),
    updatedAt: new Date('2024-04-15'),
    version: 2,
  },
  {
    id: '5',
    title: 'Printer Setup and Troubleshooting',
    description: 'How to set up network printers and resolve common printing issues.',
    content: `
      <h2>Printer Setup and Troubleshooting</h2>
      <p>This guide provides instructions for setting up network printers and resolving common printing issues.</p>
      
      <h3>Adding a Network Printer</h3>
      <ol>
        <li>Click on Start menu and open Settings</li>
        <li>Go to Devices > Printers & scanners</li>
        <li>Click "Add a printer or scanner"</li>
        <li>Select the network printer from the list</li>
        <li>If the printer isn't listed, click "The printer that I want isn't listed"</li>
        <li>Select "Add a printer using a TCP/IP address or hostname"</li>
        <li>Enter the printer's IP address (available on the printer's display or from IT)</li>
        <li>Follow the prompts to complete installation</li>
      </ol>
      
      <h3>Common Printing Issues</h3>
      
      <h4>Print Job Stuck in Queue</h4>
      <ol>
        <li>Open the print queue by double-clicking the printer icon in the taskbar</li>
        <li>Select all documents and click "Cancel"</li>
        <li>If that doesn't work, restart the Print Spooler service:
          <ul>
            <li>Press Windows+R, type "services.msc" and press Enter</li>
            <li>Find "Print Spooler" in the list</li>
            <li>Right-click and select "Restart"</li>
          </ul>
        </li>
      </ol>
      
      <h4>Printer Offline</h4>
      <ol>
        <li>Check if the printer is powered on and connected to the network</li>
        <li>Verify that your computer is connected to the same network</li>
        <li>In Printers & scanners settings, select the printer and click "Open queue"</li>
        <li>From the Printer menu, uncheck "Use Printer Offline" if it's checked</li>
        <li>Try removing and re-adding the printer</li>
      </ol>
      
      <h4>Poor Print Quality</h4>
      <ol>
        <li>Check ink or toner levels</li>
        <li>Run the printer's built-in cleaning utility</li>
        <li>Check print quality settings in the print dialog</li>
        <li>Try printing a test page from the printer's control panel</li>
      </ol>
      
      <h3>Requesting Support</h3>
      <p>If you've tried these troubleshooting steps and still experience issues, contact IT support with the following information:</p>
      <ul>
        <li>Printer model and location</li>
        <li>Error message (if any)</li>
        <li>What you were trying to print</li>
        <li>Steps you've already taken to resolve the issue</li>
      </ul>
    `,
    category: DocumentCategory.Hardware,
    tags: ['printer', 'troubleshooting', 'hardware'],
    createdBy: '5',
    createdAt: new Date('2024-02-25'),
    updatedAt: new Date('2024-05-10'),
    version: 3,
  },
  {
    id: '6',
    title: 'Data Backup and Recovery Procedures',
    description: 'Company procedures for data backup and recovery to prevent data loss and ensure business continuity.',
    content: `
      <h2>Data Backup and Recovery Procedures</h2>
      <p>This document outlines the company's data backup and recovery procedures to prevent data loss and ensure business continuity.</p>
      
      <h3>Backup Schedule</h3>
      <ul>
        <li><strong>Daily Incremental Backups:</strong> Performed automatically at 2:00 AM for all network drives and critical systems</li>
        <li><strong>Weekly Full Backups:</strong> Performed every Sunday at 1:00 AM</li>
        <li><strong>Monthly Archive Backups:</strong> Performed on the first day of each month and stored for 1 year</li>
      </ul>
      
      <h3>What Is Backed Up</h3>
      <ul>
        <li>All data on network drives (S:, P:, and D: drives)</li>
        <li>Database servers (SQL, MySQL, PostgreSQL)</li>
        <li>Email server data</li>
        <li>Critical application data</li>
        <li>Configuration files for key systems</li>
      </ul>
      
      <h3>Individual Workstation Backups</h3>
      <p>Individual workstations are NOT automatically backed up. Employees should:</p>
      <ul>
        <li>Save all important files to network drives</li>
        <li>Use OneDrive for Business for document storage when working remotely</li>
        <li>Never store critical business data on local drives (C:) only</li>
      </ul>
      
      <h3>Backup Storage</h3>
      <ul>
        <li>Primary backups are stored on-site on dedicated backup servers</li>
        <li>Secondary backups are replicated to our secure cloud storage</li>
        <li>Monthly archives are stored both in the cloud and on offline media in a secure location</li>
      </ul>
      
      <h3>Data Recovery Process</h3>
      <ol>
        <li>Contact IT support to report data loss</li>
        <li>Provide details: what data was lost, when it was last accessed, and how the loss occurred</li>
        <li>IT will locate the appropriate backup based on the information provided</li>
        <li>The data will be restored to its original location or an alternative location as specified</li>
        <li>IT will verify with the user that the restored data is complete and accessible</li>
      </ol>
      
      <h3>Recovery Time Expectations</h3>
      <ul>
        <li><strong>Critical systems:</strong> 4 hours or less</li>
        <li><strong>Important business data:</strong> 8 hours or less</li>
        <li><strong>Non-critical data:</strong> 24-48 hours</li>
        <li><strong>Archived data:</strong> 1-3 business days</li>
      </ul>
      
      <h3>Disaster Recovery</h3>
      <p>In the event of a major system failure or disaster:</p>
      <ol>
        <li>The IT disaster recovery team will be activated</li>
        <li>Critical systems will be restored first according to the Business Continuity Plan</li>
        <li>Regular updates will be provided to department heads</li>
        <li>Full recovery procedures are detailed in the Disaster Recovery Plan document</li>
      </ol>
    `,
    category: DocumentCategory.Policies,
    tags: ['backup', 'recovery', 'data protection'],
    createdBy: '1',
    createdAt: new Date('2024-03-05'),
    updatedAt: new Date('2024-05-15'),
    version: 2,
  },
  {
    id: '7',
    title: 'Remote Work Policy and Guidelines',
    description: 'Company policies and technical guidelines for secure and productive remote work.',
    content: `
      <h2>Remote Work Policy and Guidelines</h2>
      <p>This document outlines the company's remote work policies and technical guidelines to ensure security and productivity.</p>
      
      <h3>Eligibility</h3>
      <p>Remote work eligibility is determined by:</p>
      <ul>
        <li>Job role and responsibilities</li>
        <li>Department requirements</li>
        <li>Manager approval</li>
        <li>Performance history</li>
      </ul>
      
      <h3>Technical Requirements</h3>
      <p>All remote workers must have:</p>
      <ul>
        <li>Reliable high-speed internet connection (minimum 25 Mbps download/5 Mbps upload)</li>
        <li>Company-issued laptop or approved personal device that meets security requirements</li>
        <li>Secure home network with password-protected Wi-Fi</li>
        <li>Functioning webcam and microphone for video conferences</li>
        <li>Phone or softphone capability</li>
      </ul>
      
      <h3>Security Requirements</h3>
      <ul>
        <li>Use VPN for all company network access</li>
        <li>Enable disk encryption on all devices storing company data</li>
        <li>Keep operating system and applications updated with security patches</li>
        <li>Use multi-factor authentication for all company accounts</li>
        <li>Lock your computer when stepping away</li>
        <li>Work in a private area when handling sensitive information</li>
        <li>Avoid using public Wi-Fi; use mobile hotspot if necessary</li>
      </ul>
      
      <h3>Work Hours and Availability</h3>
      <ul>
        <li>Maintain your regular work schedule unless alternative arrangements are approved</li>
        <li>Be available during core business hours (10:00 AM - 3:00 PM)</li>
        <li>Update your calendar and status in communication tools to reflect availability</li>
        <li>Respond to messages within reasonable timeframes based on urgency</li>
      </ul>
      
      <h3>Communication Expectations</h3>
      <ul>
        <li>Check email at least three times daily</li>
        <li>Remain logged into company chat during working hours</li>
        <li>Attend all required virtual meetings</li>
        <li>Provide regular progress updates to your manager</li>
        <li>Notify your team of any extended periods of unavailability</li>
      </ul>
      
      <h3>Technical Support</h3>
      <p>Remote workers can get IT support by:</p>
      <ul>
        <li>Submitting a ticket through the IT support portal</li>
        <li>Calling the IT help desk at ext. 4357 (HELP)</li>
        <li>Using the remote support tool to allow IT staff to troubleshoot issues</li>
      </ul>
      
      <h3>Equipment and Expenses</h3>
      <ul>
        <li>Company-issued equipment remains company property</li>
        <li>Report damaged or malfunctioning equipment immediately</li>
        <li>Internet service is generally the employee's responsibility</li>
        <li>Consult the expense policy for reimbursable remote work expenses</li>
      </ul>
    `,
    category: DocumentCategory.Policies,
    tags: ['remote work', 'policy', 'security'],
    createdBy: '4',
    createdAt: new Date('2024-01-20'),
    updatedAt: new Date('2024-04-10'),
    version: 2,
  }
];