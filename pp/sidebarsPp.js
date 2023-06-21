module.exports = {
  pp: [
    {
      type: 'category',
      label: 'Getting started',
      items: [
        {
          type: 'doc',
          id: 'integrations/plugin-packs/getting-started/introduction'
        },
        {
          type: 'category',
          label: 'How-to guides',
          items: [
            {
              type: 'doc',
              id: 'integrations/plugin-packs/getting-started/how-to-guides/azure-credential-configuration'
            },
            {
              type: 'doc',
              id: 'integrations/plugin-packs/getting-started/how-to-guides/centreon-nsclient-tutorial'
            },
            {
              type: 'doc',
              id: 'integrations/plugin-packs/getting-started/how-to-guides/collect-openmetrics'
            },
            {
              type: 'doc',
              id: 'integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins'
            },
            {
              type: 'doc',
              id: 'integrations/plugin-packs/getting-started/how-to-guides/windows-winrm-wsman-tutorial'
            }
          ]
        },
        {
          type: 'doc',
          id: 'integrations/plugin-packs/releases/release-notes'
        },
        {
          type: 'category',
          label: 'Developers Center',
          items: [
            {
              type: 'doc',
              id: 'integrations/plugin-packs/dev-resources/introduction'
            },
            {
              type: 'doc',
              id: 'integrations/plugin-packs/dev-resources/plugins-guidelines'
            },
            {
              type: 'doc',
              id: 'integrations/plugin-packs/dev-resources/develop-with-centreon-plugins'
            }
          ]
        }
      ]
    },
    {
      type: 'category',
      label: 'Applications',
      items: [
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/applications-monitoring-alyvix-restapi'
        },
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/applications-antivirus-kaspersky-snmp'
        },
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/applications-pacemaker-ssh'
        }
      ]
    },
    {
      type: 'category',
      label: 'Centreon',
      items: [
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/applications-monitoring-centreon-central'
        },
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/applications-monitoring-centreon-poller'
        }
      ]
    },
    {
      type: 'category',
      label: 'Cloud',
      items: [
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/cloud-aws-ec2'
        },
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/cloud-aws-lambda'
        },
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/cloud-azure-network-appgateway'
        },
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/cloud-azure-policyinsights-policystates'
        },
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/cloud-azure-compute-virtualmachine'
        },
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/cloud-gcp-compute-computeengine'
        }
      ]
    },
    {
      type: 'category',
      label: 'Network',
      items: [
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/network-aruba-cppm-snmp'
        },
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/network-cisco-standard-snmp'
        }
      ]
    },
    {
      type: 'category',
      label: 'Operating-system',
      items: [
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/operatingsystems-linux-nrpe3'
        },
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/operatingsystems-linux-snmp'
        },
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/operatingsystems-linux-ssh'
        },
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/operatingsystems-windows-snmp'
        },
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/operatingsystems-windows-wsman'
        }
      ]
    },
    {
      type: 'category',
      label: 'Printer',
      items: [
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/hardware-printers-standard-rfc3805-snmp'
        }
      ]
    },
    {
      type: 'category',
      label: 'Protocol',
      items: [
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/applications-protocol-x509'
        },
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/applications-protocol-http'
        }
      ]
    },
    {
      type: 'category',
      label: 'Storage',
      items: [
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/hardware-storage-hitachi-hnas-snmp'
        }
      ]
    },
    {
      type: 'category',
      label: 'Ups-pdu',
      items: [
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/hardware-ups-standard-rfc1628-snmp'
        }
      ]
    },
    {
      type: 'category',
      label: 'Virtualization',
      items: [
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/virtualization-vmware2-esx'
        },
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/virtualization-vmware2-esx-wsman'
        },
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/virtualization-vmware2-vcenter-generic'
        },
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/virtualization-vmware2-vm'
        }
      ]
    }
  ]
};