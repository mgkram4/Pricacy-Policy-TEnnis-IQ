
export default function PrivacyPolicy() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 max-w-3xl w-full">
        <h1 className="text-3xl font-bold border-b border-black/10 dark:border-white/10 pb-4">Privacy Policy</h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 italic">Last Updated: December 9, 2024</p>

        <p className="text-sm">
          Thank you for choosing our services. We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and protect your data.
        </p>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b border-black/10 dark:border-white/10 pb-2">Information We Collect</h2>
          <p className="text-sm">We collect the following types of information:</p>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li><span className="font-semibold">Personal Information:</span> Name, email address, contact information, and username when you create an account</li>
            <li><span className="font-semibold">Usage Data:</span> Information about how you interact with our services, including browser type, IP address, and pages visited</li>
            <li><span className="font-semibold">Device Information:</span> Details about the device you use to access our services</li>
            <li><span className="font-semibold">User Content:</span> Any content you create, upload, or share while using our services</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b border-black/10 dark:border-white/10 pb-2">How We Use Your Information</h2>
          <ul className="list-disc list-inside text-sm space-y-2">
            <li><span className="font-semibold">Service Delivery:</span> To provide and maintain our services, process transactions, and send important notifications</li>
            <li><span className="font-semibold">Communication:</span> To respond to your inquiries and send service-related communications</li>
            <li><span className="font-semibold">Improvement:</span> To analyze usage patterns and improve our services</li>
            <li><span className="font-semibold">Security:</span> To detect, prevent, and address technical issues or fraudulent activities</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold border-b border-black/10 dark:border-white/10 pb-2">Account Deletion</h2>
          <p className="text-sm">To delete your account:</p>
          <ol className="list-decimal list-inside text-sm space-y-2">
            <li>Email privacy@yourdomain.com with subject "Account Deletion Request"</li>
            <li>Include your full name, email, and username</li>
            <li>We will process your request within 30 days</li>
          </ol>

          <div className="bg-black/[.05] dark:bg-white/[.06] p-4 rounded-lg space-y-2 text-sm">
            <p className="font-semibold">Data Handling During Deletion:</p>
            <div className="space-y-4">
              <div>
                <p className="font-medium">Will Be Deleted:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Account information</li>
                  <li>User-generated content</li>
                  <li>Activity history</li>
                  <li>Preferences</li>
                </ul>
              </div>
              <div>
                <p className="font-medium">Will Be Retained:</p>
                <ul className="list-disc list-inside ml-4">
                  <li>Aggregate analytics</li>
                  <li>Transaction records (as required by law)</li>
                  <li>Support communications (6 months)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black/[.05] dark:bg-white/[.06] p-6 rounded-lg space-y-4">
          <h2 className="text-xl font-semibold">Contact Us</h2>
          <p className="text-sm">If you have any questions about this Privacy Policy, please contact us:</p>
          <div className="text-sm space-y-2">
            <p>Email: privacy@yourdomain.com</p>
            <p>Support: support@yourdomain.com</p>
          </div>
        </section>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          href="/terms"
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          Terms of Service
        </a>
        <a
          href="/cookies"
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        >
          Cookie Policy
        </a>
      </footer>
    </div>
  );
}