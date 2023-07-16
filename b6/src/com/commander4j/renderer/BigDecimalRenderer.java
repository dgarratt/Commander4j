package com.commander4j.renderer;

/**
 * @author David Garratt
 * 
 * Project Name : Commander4j
 * 
 * Filename     : BigDecimalRenderer.java
 * 
 * Package Name : com.commander4j.renderer
 * 
 * License      : GNU General Public License
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as
 * published by the Free Software Foundation, either version 3 of the 
 * License, or (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public 
 * License along with this program.  If not, see
 * http://www.commander4j.com/website/license.html.
 * 
 */

import java.awt.Color;
import java.awt.Component;
import java.math.BigDecimal;
import java.text.NumberFormat;
import java.util.Locale;

import javax.swing.JLabel;
import javax.swing.JTable;
import javax.swing.table.TableCellRenderer;

import com.commander4j.sys.Common;

public class BigDecimalRenderer implements TableCellRenderer
{
	private TableCellRenderer delegate;
	private NumberFormat formatter;
	private Locale locale = Locale.getDefault();

	public BigDecimalRenderer(TableCellRenderer defaultRenderer)
	{
		this.delegate = defaultRenderer;
		formatter = NumberFormat.getNumberInstance(locale);
	}

	public Component getTableCellRendererComponent(JTable table, Object value, boolean isSelected, boolean hasFocus, int row, int column)
	{
		Component c = delegate.getTableCellRendererComponent(table, value, isSelected, hasFocus, row, column);
		//System.out.println("row="+String.valueOf(row)+ " col="+String.valueOf(column));
		String s = "";
		try
		{
			s = formatter.format((BigDecimal) value);
		}
		catch (Exception ex)
		{
			
		}
		if (c instanceof JLabel)
		{
			((JLabel) c).setText(s);
			((JLabel) c).setHorizontalAlignment(JLabel.RIGHT);
		}
		
		Color foreground, background;

		if (isSelected)
		{
			foreground = Common.color_listFontSelected;
			background = Common.color_listHighlighted;
		}
		else
		{
			if (row % 2 == 0)
			{
				foreground = Common.color_listFontStandard;
				background = Common.color_tablerow1;
			}
			else
			{
				foreground = Common.color_listFontStandard;
				background = Common.color_tablerow2;
			}
		}
		
		c.setForeground(foreground);
		c.setBackground(background);
		
		return c;
	}
}