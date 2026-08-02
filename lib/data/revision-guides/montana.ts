import { Target, AlertTriangle, Info, CheckCircle } from 'lucide-react'

export const montanaRevisionContent = {
  'Real Estate Principles & Law': {
    icon: Target,
    sections: [
      {
        title: 'Fiduciary Duties of an Agent',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Core Fiduciary Obligations
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Obedience:</strong> An agent must follow all lawful instructions of the principal.
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Loyalty:</strong> The agent must place the principal's interests above all others, including their own.
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Disclosure:</strong> The agent must disclose all material facts that could affect the principal's decisions.
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Confidentiality:</strong> The agent must safeguard the principal's private and financial information indefinitely.
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Accounting:</strong> The agent must account for all funds, deposits, and documents related to the transaction.
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Reasonable Care:</strong> The agent must perform their duties with the skill and diligence of a licensed professional.
              </li>
            </ul>
          </div>
        `
      },
      {
        title: 'Types of Property Ownership',
        content: `
          <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e40af; font-weight: 600; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #e5e7eb;">
              Forms of Co-Ownership
            </h3>
            <ul style="margin-left: 1.5rem; line-height: 1.6;">
              <li style="margin-bottom: 0.75rem;">
                <strong>Tenancy in Common:</strong> Co-ownership where tenants hold individual, undivided shares. Shares may be unequal, and there is no right of survivorship.
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Joint Tenancy:</strong> Co-ownership with equal undivided interests and the right of survivorship (upon death, interest automatically passes to survivors).
              </li>
              <li style="margin-bottom: 0.75rem;">
                <strong>Tenancy by the Entirety:</strong> A special form of joint tenancy reserved for legally married couples, providing protection against individual creditors.
              </li>
            </ul>
          </div>
        `
      }
    ]
  }
}
