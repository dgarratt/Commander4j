package com.commander4j.util;

import java.io.File;
import java.io.FileFilter;
import java.util.Calendar;
import java.util.Date;

import org.apache.commons.io.filefilter.AgeFileFilter;

import com.commander4j.sys.Common;

public class JArchive
{

	public static int archiveBackupFiles(String path, int daysToKeep)
	{
		int result = 0;

		Calendar cal = Calendar.getInstance();
		cal.setTime(new Date());
		cal.add(Calendar.DATE, -1 * daysToKeep);
		Date cutoffDate = cal.getTime();

		if (Utility.replaceNullStringwithBlank(path).equals(""))
		{
			path = Common.logDir;
		}

		if (Utility.replaceNullStringwithBlank(path).equals("."))
		{
			path = Common.logDir;
		}

		if (daysToKeep <= 0)
		{
			daysToKeep = 1;
		}

		File directory = new File(path);

		result = result + deleteFiles(directory, new AgeFileFilter(cutoffDate));

		return result;
	}

	public static int deleteFiles(File directory, FileFilter fileFilter)
	{
		int count = 0;
		File[] files = directory.listFiles(fileFilter);

		for (File file : files)
		{
			// file.delete();
			try
			{
				Date lastMod = new Date(file.lastModified());
				System.out.println("Removing log file [" + file.getName() + ", Date: " + lastMod + "] from ["
						+ directory.getName() + "]");
				file.delete();
				count++;
			} catch (Exception ex)
			{

			}

		}

		return count;
	}

}
