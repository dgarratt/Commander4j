package com.commander4j.app;

import java.awt.BorderLayout;
import java.awt.Dimension;
import java.awt.Rectangle;
import java.awt.Toolkit;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyAdapter;
import java.awt.event.KeyEvent;

import javax.swing.JCheckBox;
import javax.swing.JDesktopPane;
import javax.swing.JInternalFrame;
import javax.swing.SwingConstants;
import javax.swing.SwingUtilities;

import com.commander4j.db.JDBLanguage;
import com.commander4j.db.JDBLocation;
import com.commander4j.db.JDBProcessOrderResource;
import com.commander4j.gui.JButton4j;
import com.commander4j.gui.JLabel4j_std;
import com.commander4j.gui.JTextField4j;
import com.commander4j.sys.Common;
import com.commander4j.util.JHelp;
import com.commander4j.util.JUtility;

public class JInternalFrameProcessOrderResourceProperties extends JInternalFrame
{
	private static final long serialVersionUID = 1;
	private JDesktopPane jDesktopPane1;
	private JButton4j jButtonCancel;
	private JButton4j jButtonHelp;
	private JButton4j jButtonUpdate;
	private String lresource;
	private JDBProcessOrderResource processOrderResource = new JDBProcessOrderResource(Common.selectedHostID, Common.sessionID);
	private JTextField4j jTextFieldDescription;
	private JLabel4j_std jLabelBatchSuffix;
	private JLabel4j_std jLabelDescription;
	private JTextField4j jTextFieldResource;
	private JLabel4j_std jLabelResource;
	private JDBLanguage lang;
	private JCheckBox checkBoxEnabled;
	private JTextField4j textFieldBatchSuffix;
	private JLabel4j_std label4j_std;

	public JInternalFrameProcessOrderResourceProperties()
	{
		super();
		lang = new JDBLanguage(Common.selectedHostID, Common.sessionID);

		initGUI();

		final JHelp help = new JHelp();
		help.enableHelpOnButton(jButtonHelp, JUtility.getHelpSetIDforModule("FRM_ADMIN_PO_RESOURCE_EDIT"));
		
		Dimension screen = Toolkit.getDefaultToolkit().getScreenSize();
		Rectangle window = getBounds();
		setLocation((screen.width - window.width) / 2, (screen.height - window.height) / 2);

		SwingUtilities.invokeLater(new Runnable() {
			public void run() {
				jTextFieldDescription.requestFocus();
			}
		});
	}
	
	public void setResource(String res)
	{
		lresource = res;

		jTextFieldResource.setText(lresource);


		processOrderResource.setResource(lresource);
		processOrderResource.getResourceProperties();

		jTextFieldResource.setText(processOrderResource.getResource());
		jTextFieldDescription.setText(processOrderResource.getDescription());
		textFieldBatchSuffix.setText(processOrderResource.getBatchSuffix());

		if (processOrderResource.getEnabled().equals("Y"))
		{
			checkBoxEnabled.setSelected(true);
		}
		else
		{
			checkBoxEnabled.setSelected(false);
		}

	}

	public JInternalFrameProcessOrderResourceProperties(String res)
	{
		this();
		setResource(res);
	}

	private void updateRecord()
	{
		processOrderResource.setResource(jTextFieldResource.getText());
		processOrderResource.setDescription(jTextFieldDescription.getText());
		processOrderResource.setBatchSuffix(textFieldBatchSuffix.getText());
		if (checkBoxEnabled.isSelected())
		{
			processOrderResource.setEnabled("Y");
		}
		else
		{
			processOrderResource.setEnabled("N");
		}

		if (processOrderResource.isValidResource())
		{
			processOrderResource.update();
		}
		else
		{
			processOrderResource.create(jTextFieldResource.getText());
			processOrderResource.update();
		}
		jButtonUpdate.setEnabled(false);
	}
	
	private void initGUI() {
		try
		{
			this.setPreferredSize(new java.awt.Dimension(358, 207));
			this.setBounds(0, 0, 377, 223);
			setVisible(true);
			this.setClosable(true);
			{
				jDesktopPane1 = new JDesktopPane();
				jDesktopPane1.setBackground(Common.color_app_window);
				getContentPane().add(jDesktopPane1, BorderLayout.CENTER);
				jDesktopPane1.setPreferredSize(new java.awt.Dimension(350, 182));
				jDesktopPane1.setLayout(null);
				{
					jButtonUpdate = new JButton4j(Common.icon_update);
					jDesktopPane1.add(jButtonUpdate);
					jButtonUpdate.setEnabled(false);
					jButtonUpdate.setText(lang.get("btn_Save"));
					jButtonUpdate.setMnemonic(lang.getMnemonicChar());
					jButtonUpdate.setBounds(6, 142, 112, 32);
					jButtonUpdate.addActionListener(new ActionListener() {
						public void actionPerformed(ActionEvent evt) {

							updateRecord();
						}
					});
				}
				{
					jButtonHelp = new JButton4j(Common.icon_help);
					jDesktopPane1.add(jButtonHelp);
					jButtonHelp.setText(lang.get("btn_Help"));
					jButtonHelp.setMnemonic(lang.getMnemonicChar());
					jButtonHelp.setBounds(118, 142, 112, 32);
				}
				{
					jButtonCancel = new JButton4j(Common.icon_close);
					jDesktopPane1.add(jButtonCancel);
					jButtonCancel.setText(lang.get("btn_Close"));
					jButtonCancel.setMnemonic(lang.getMnemonicChar());
					jButtonCancel.setBounds(230, 142, 112, 32);
					jButtonCancel.addActionListener(new ActionListener() {
						public void actionPerformed(ActionEvent evt) {
							dispose();
						}
					});
				}
				{
					jLabelResource = new JLabel4j_std();
					jDesktopPane1.add(jLabelResource);
					jLabelResource.setText(lang.get("lbl_Process_Order_Required_Resource"));
					jLabelResource.setHorizontalAlignment(SwingConstants.TRAILING);
					jLabelResource.setBounds(49, 13, 70, 21);
				}
				{
					jTextFieldResource = new JTextField4j(JDBProcessOrderResource.field_Resource_id);
					jDesktopPane1.add(jTextFieldResource);
					jTextFieldResource.setText(lresource);
					jTextFieldResource.setBounds(126, 13, 126, 21);
					jTextFieldResource.setEnabled(false);
					jTextFieldResource.setEditable(false);
				}
				{
					jLabelDescription = new JLabel4j_std();
					jDesktopPane1.add(jLabelDescription);
					jLabelDescription.setText(lang.get("lbl_Location_ID"));
					jLabelDescription.setHorizontalAlignment(SwingConstants.TRAILING);
					jLabelDescription.setBounds(49, 41, 70, 21);
				}
				{
					jTextFieldDescription = new JTextField4j(JDBLocation.field_location_id);
					jTextFieldDescription.addKeyListener(new KeyAdapter() {
						@Override
						public void keyReleased(KeyEvent e) {
							jButtonUpdate.setEnabled(true);
						}
					});
					jDesktopPane1.add(jTextFieldDescription);
					jTextFieldDescription.setText("");
					jTextFieldDescription.setBounds(126, 41, 229, 21);
				}

				{
					jLabelBatchSuffix = new JLabel4j_std();
					jDesktopPane1.add(jLabelBatchSuffix);
					jLabelBatchSuffix.setText(lang.get("lbl_Material_Batch"));
					jLabelBatchSuffix.setHorizontalAlignment(SwingConstants.TRAILING);
					jLabelBatchSuffix.setBounds(42, 69, 77, 21);
				}
				
				textFieldBatchSuffix = new JTextField4j(15);
				textFieldBatchSuffix.addKeyListener(new KeyAdapter() {
					@Override
					public void keyReleased(KeyEvent e) {
						jButtonUpdate.setEnabled(true);
					}
				});
				textFieldBatchSuffix.setText("");
				textFieldBatchSuffix.setBounds(126, 69, 229, 21);
				jDesktopPane1.add(textFieldBatchSuffix);
				
				checkBoxEnabled = new JCheckBox("");
				checkBoxEnabled.addActionListener(new ActionListener() {
					public void actionPerformed(ActionEvent e) {
						jButtonUpdate.setEnabled(true);
					}
				});
				checkBoxEnabled.setBounds(126, 97, 21, 23);
				jDesktopPane1.add(checkBoxEnabled);
				
				label4j_std = new JLabel4j_std();
				label4j_std.setText(lang.get("lbl_Enabled"));
				label4j_std.setHorizontalAlignment(SwingConstants.TRAILING);
				label4j_std.setBounds(12, 97, 107, 21);
				jDesktopPane1.add(label4j_std);
				
			}
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
	}
}
